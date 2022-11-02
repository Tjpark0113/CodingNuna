let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) => menu.addEventListener("click",(event)=>getNewsByTopic(event)));
let page = 1;
let total_pages = 5;

let searchButton = document.getElementById("search-button");

let url;

// 각 함수에 필요한 url을 만든다
// api호출 함수를 부른다

const getNews = async () => {
    try {
        let header = new Headers({'x-api-key':'1aw3wErHQxKBQg9avE_OeDSmMtlM7H_HOdejZCqAoko'});
        url.searchParams.set('page',page);
        let response = await fetch(url, {headers: header });
        let data = await response.json();
        if(response == 200) {
            if(data.total_hits == 0){
                throw new Error("검색된 결과값이 없습니다")
            }
            news = data.articles;
            total_pages = data.total_pages;
            // console.log(news);
            render();
            pagenation();
        } else {
            throw new Error(data.message);
        }     
    } catch (error) {
        console.log("잡힌 에러는",error.message);
        errorRender(error.message);
    }    
}

const getLatestNews = async ()=>{
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10`);
    
    getNews();
};

const getNewsByTopic = async (event) => {
    let topic = event.target.textContent.toLowerCase();
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);
    // let header = new Headers({'x-api-key':'1aw3wErHQxKBQg9avE_OeDSmMtlM7H_HOdejZCqAoko'});
    // let response = await fetch(url,{headers:header});
    // let data = await response.json();
    // news=data.articles;
    // render();
    // console.log(url)
    getNews();
}

const getNewsByKeyword = async () => {
    //1.검색 키워드 읽어오기
    //2. url에 검색 키워드 붙이기
    //3. header 준비
    //4. url 부르기
    //5. 데이터 가져오기
    //6. 데이터 보여주기

    let keyword = document.getElementById("search-input").value;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);

    getNews();
};



const render =()=> {
    let newsHTML = ''
    newsHTML = news.map(item=>{
        return `<div class="row news">
        <div class="col-4">
        <img class="news-img"
        src="${
          item.media ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
}" />
        </div>
        <div class="col-8">
            <h2>${item.title}</h2>
            <p>item.summary == null || item.summary == ""
            ? "내용없음"
            : item.summary.length > 200
            ? item.summary.substring(0, 200) + "..."
            : item.summary</p>
            <div>${news.rights || "no source"}  ${moment(
                news.published_date
             ).fromNow()}</div>
             
        </div>
    </div>`
    }).join('');
    // <div>${item.rights}*${item.published_date}</div>


    document.getElementById("news-board").innerHTML=newsHTML
}

const errorRender = (message) => {
    let errorHTML = `<div class="alert alert-danger text-center" role="alert">
    ${message}
  </div>`;
    document.getElementById("news-board").innerHTML = errorHTML;
}

const pagenation = () => {
    let pagenationHTML = ``
    //total_page값 알기
    //현재보는 page알기
    //현재 page의 그룹알기
    let pageGroup = Math.ceil(page/5);
    //현재 page의 그룹으로 마지막 page 알기
    let last = pageGroup*5
    // if(last > total_pages) {
    //     last = total_pages;
    // }
    //마지막page로 첫번째 page 알기
    let first = last - 4 
    // <= 0 ? 1: last -4;
    // if (first >= 6) {
    //     pagenationHTML = `<li class="page-item" onclick="moveToPage(1)">
    //                     <a class="page-link" href='#js-bottom'>&lt;&lt;</a>
    //                   </li>
    //                   <li class="page-item" onclick="moveToPage(${page - 1})">
    //                     <a class="page-link" href='#js-bottom'>&lt;</a>
    //                   </li>`;
    // }
    //첫번째부턴 마지막 page 프린트하기

    pagenationHTML = `<li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${page-1})">
      <span aria-hidden="true">&lt;</span>
    </a>
  </li>`;
    
    for(let i=first;i<=last;i++) {
        pagenationHTML += `<li class="page-item ${page == i ? "active" : ""}"><a class="page-link" href="#" onclick="moveToPage(${i})">${i}</a></li>`
    }

    // if (last < total_pages) {
    //     pagenationHTML += `<li class="page-item" onclick="moveToPage(${page + 1})">
    //                         <a  class="page-link" href='#js-program-detail-bottom'>&gt;</a>
    //                        </li>
    //                        <li class="page-item" onclick="moveToPage(${total_pages})">
    //                         <a class="page-link" href='#js-bottom'>&gt;&gt;</a>
    //                        </li>`;
    //   }

    pagenationHTML +=  `<li class="page-item">
    <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${page+1})">
      <span aria-hidden="true">&gt;</span>
    </a>
  </li>`;

    document.querySelector(".pagination").innerHTML = pagenationHTML;
};

const moveToPage = (pageNum) => {
    //1. 이동하고 싶은 페이지를 알기
    page = pageNum;
    //2. 이동하고 싶은 페이지를 가지고 api를 다시 호출하기
    getNews
}

// const openNav = () => {
//     document.getElementById("mySidenav").style.width = "250px";
//   };
  
// const closeNav = () => {
//     document.getElementById("mySidenav").style.width = "0";
// };

searchButton.addEventListener("click",getNewsByKeyword);
// 호이스팅으로 인해 아래로 내림
getLatestNews();