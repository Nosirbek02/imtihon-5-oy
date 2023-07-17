const btn2 = document.querySelector(".btn2")
const btn1 = document.querySelector(".btn1")
const herobuttons = document.querySelector(".hero_buttons")
const usercontent2 = document.querySelector(".user_content2")
const repo = document.querySelector(".repos")
const buttonsLine = document.querySelector(".buttons_line")
const buttonsLine2 = document.querySelector(".buttons_line2")
const userContent2list = document.querySelector(".user_content2_list")
const userContent3 = document.querySelector(".user_content3")
const box = document.querySelector(".box")
const userFolloww = document.querySelector(".user_followw")
const heroButtons = document.querySelector(".hero_buttons")
const userFollow = document.querySelector(".user_follow")
const userContent3Header=document.querySelector(".user_content3_header")

const follUrl = "https://api.github.com/users/Nosirbek02/followers"
const userUrl = "https://github.com/Nosirbek02"
const siteUrl = "https://api.github.com/users/Nosirbek02/repos"

herobuttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn2")) {
        repo.style.display = "inline-block"
        usercontent2.style.display = "none"
        buttonsLine.style.display = "none"
        buttonsLine2.style.display = "inline-block"
        userContent3.style.display = "inline-block"
        userContent3Header.style.display = "inline-block"
        box.style.display = "none"
        heroButtons.style.marginBottom="13.4px"
    }
})


herobuttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn1")) {
        userContent3.style.display = "none"
        buttonsLine.style.display = "inline-block"
        buttonsLine2.style.display = "none"
        repo.style.display = "none"
        usercontent2.style.display = "inline-block"
        box.style.display = "none"
        heroButtons.style.marginBottom="13.4px"
    }
})

userFollow.addEventListener("click", (e) => {
    buttonsLine.style.display = "none"
    buttonsLine2.style.display = "none"
    heroButtons.style.marginBottom="28.4px"
})


const renderUrl = (data) => {
    userContent2list.innerHTML = data?.map((item) => `                    
    <li class="user_item" >
                            <div class="user_item_div">
                                <a class="user_item_link" href="${item.html_url}">${item.name}</a>
                                <span class="user_item_span">${item.visibility}</span>
                            </div>
                            <div class="user_item_div2">
                                <span class="user_item_span2"></span>
                                <span class="user_item_span3">CSS</span>
                            </div>
                        </li >
`).join("");
}

const getData2 = async () => {
    fetch(siteUrl).then((res) => res.json()).then((data) => renderUrl(data)).catch((error) => { console.log(error); });
};

getData2();


const renderUI = (data) => {
    repo.innerHTML = data?.map((element) => `

                    <div class="user_repo">
                        <div class="user_repo_content">
                            <div class="user_inner">
                                <a class="repo_name" href="#">${element.name}</a>
                                <span class="repo_span">${element.visibility}</span>
                            </div>
                            <div class="user_inner2">
                                <span class="user_inner2_span"></span>
                                <p class="user_repo_text">CSS</p>
                                <span class="user_repo_span">${element.updated_at}</span>
                            </div>
                        </div>

                        <div class="user_repo_content2">
                            <select class="user_repo_select" name="select" >
                                <option class="user_repo_op" value="Star">Star</option>
                            </select>
                        </div>
                    </div>
`).join("");
}

const getData = () => {
    fetch(siteUrl).then((res) => res.json()).then((data) => renderUI(data)).catch((error) => { console.log(error); });
};

getData();



userFolloww.addEventListener("click", (e) => {
    box.style.display = "inline-block"
    box.style.display = "flex"
    usercontent2.style.display = "none"
    repo.style.display = "none"
    userContent3.style.display = "none"
    userContent3Header.style.display = "none"
})








const renderUrlFoll = (data) => {
    box.innerHTML = data?.map((el) => `
    <a href="#"><img class="box_img" src="./img/131777911.png" alt=""></a>
                    <div class="box_inner">
                        <a class="box_inner_a" href="#">${el.login}</a>
                    </div>
                    <div class="box_btn">
                        <button class="btn">Unfollow</button>
                    </div>

`).join("");
}

const getData3 = async () => {
    fetch(follUrl).then((res) => res.json()).then((data) => renderUrlFoll(data)).catch((error) => { console.log(error); });
};

getData3();