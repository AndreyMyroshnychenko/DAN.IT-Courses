class Card{

    constructor(name, email, postId, title, body){
        this.name=name;
        this.email=email;
        this.postId=postId;
        this.title=title;
        this.body=body;
    }

    render(){
        this.card=document.createElement("div");
        this.card.classList.add("card");
        this.card.innerHTML=`
        <div class = "cardHead">
             <div class = "cardHead_Info">
                <p class = "name">${this.name}</p>
                <a class = "email" href=mailto:${this.email}>@${this.email}</a>
            </div>
        </div>
        <button class="btn btn-light">x</button>
        <p class = "post-title">${this.title}</p>
        <p class = "post-body">${this.body}</p>`;

        this.deleteButton();
        return this.card;
    }

    deleteButton(){
        this.card.addEventListener('click', (event)=>{
            let targetForDelete=event.target.closest(".btn");

            if(targetForDelete){

                let deleteAction=confirm("Are you sure you want to delete?");
                if(deleteAction){

                    this.card.remove();
                    fetch(`https://ajax.test-danit.com/api/json/posts/${this.postId}`, {
                    method: 'DELETE'});
                }
            }
        });
    }
}

async function toDisplay(){
    let root = document.querySelector(".root");
    let load=document.querySelector(".text-center");
    let response=await fetch("https://ajax.test-danit.com/api/json/users");
    let getUsers=await response.json();

    getUsers.forEach(async user => {
        let{name, username, id}=user;
        let postsLink=await fetch("https://ajax.test-danit.com/api/json/posts")
        let postResponse=await postsLink.json();
        load.style.display="none";
        let filterPosts=postResponse.filter(post => post.userId === id);

        filterPosts.forEach(post => {
            let{id, title, body}=post;
            let card=new Card(name, username, id, title, body);
            root.append(card.render());
        })
    });

}

toDisplay();