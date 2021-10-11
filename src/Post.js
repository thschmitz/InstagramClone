import {db} from './firebase.js';
import firebase from 'firebase';
import {useEffect, useState} from 'react';

function Post(props){

    const [comentarios,setComentarios] = useState([]);


    useEffect(() => {
        db.collection('posts').doc(props.id).collection('comentarios').orderBy('timestamp','asc').onSnapshot(function(snapshot){
            setComentarios(snapshot.docs.map(function(document){
                return {id:document.id,info:document.data()}
              }))
        })

    }, [])

    function comentar(id, e){
        e.preventDefault();
        
        let comentarioAtual = document.querySelector('#comentario-'+id).value;
        
        
        db.collection('posts').doc(id).collection('comentarios').add({
            nome:props.user,
            comentario: comentarioAtual,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        })
        


        alert('Comentário feito com sucesso!');


        document.querySelector('#comentario-'+id).value = "";

    }

    function curtidas(id, e){
        e.preventDefault();
        curtidas = 0;

    }



    return (
            <div className="postSingle">
                    <div class="perfil">
                        <img src="data:image/jpeg;base64,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"></img>
                        <p><b>{props.info.userName}</b>: {props.info.titulo}</p>
                    </div>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    
                    <img src={props.info.image} />
                    <i class="fa fa-heart"></i>
                    <i class="fa fa-comment"></i>
                    <i class="fa fa-share"></i>
                    {
                    (props.user)?
                    <form onSubmit={(e)=>curtidas(props.id, e)}>
                        <div class="envioComentario">
                            <p><b>X curtidas</b></p>
                        </div>
                    </form>
                    :
                    <div class="NaoLogado">
                    </div>
                    }
                    <div className="coments">
                        
                        {
                            comentarios.map(function(val){
                                return(
                                    <div className="coment-single">
                                        <p><b>{val.info.nome}</b>: {val.info.comentario}</p>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {
                    (props.user)?
                    <form onSubmit={(e)=>comentar(props.id,e)}>
                        <div class="envioComentario">
                            <input placeholder="Adicione um comentario..."type="text" id={"comentario-"+props.id}></input>
                            <input type="submit" value="Publicar!" />
                        </div>
                        <p>{props.timestamp}</p>
                        
                    </form>
                    :
                    <div class="NaoLogado">
                        <p>Crie uma conta ou simplesmente se logue para comentar!</p>
                    </div>
                    }
                </div>
    )

}

export default Post;
