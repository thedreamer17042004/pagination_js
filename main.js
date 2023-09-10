// * => start:(currenpage - 1) * perofpage + 1
// * =>end: (currenpage - 1) * perpage + perpage

var container = document.getElementById('row_');
var ctn__ = document.getElementById('ctn__');
var paginate_ = document.getElementById('paginate_');
var tr = [];
var currentPage = 1;




async function fetchData(currenpage) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    var length = posts.length;
    var perpage = 10;

    for (let i = (currenpage - 1) * perpage + 1; i < (currenpage - 1) * perpage + perpage; i++) {

        showData(posts, i);
        container.innerHTML = tr;


    }

    pagination(length);

}


function pagination(total) {
    var keyofpagination = [];
    var paginate = '';
    var perpage = 10;
    var numofpage = total / perpage;//3
    for (let id = 1; id <= numofpage; id++) {
        keyofpagination.push(id);

    }
    keyofpagination.forEach((element, id) => {
        paginate += ` 
        <li class="page-item link_me"  ><a class="page-link" onclick="clickButton(${id + 1})"> ${element}</a></li>
    `
    });

    paginate_.innerHTML = paginate;

}

async function clickButton(id) {
    currentPage = id;
    if (tr.length > 0) {
        tr = [];
        await fetchData(id);
        var a = document.querySelectorAll(".link_me");
        a[id - 1].classList.add('active');
    } else {
        console.log('khong co')
    }
    return id;
}

addEventListener("load", async (event) => {
    await fetchData(1)

    var a = document.querySelector(".link_me");
    a.classList.add('active');
    // console.log(a)
});


 function showData(posts, i) {
   
   
    tr += `
    <div class="col-md-3">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title" class="text_ctn">${posts[i].title}</h4>
        <p class="card-text" class="body_ctn">
        ${posts[i].body}
    </p>
        <p class="card-text">
            <a name="" id="" class="btn btn-primary"  role="button">View</a>
        </p>
        <p>
        Comment:5
        </p>
      </div>
    </div>
</div>
    `

    return tr;
}


function clickButtonNext() {
    if(currentPage == 10) {
        alert('= 10')
    }else {
        clickButton(++currentPage)

    }
}
function clickButtonPrev() {
    if(currentPage == 1) {
        alert('= 0')
    }else {
        clickButton(--currentPage)

    }
}

// async function getNumComment(id) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const comment = await response.json();
//     console.log(comment)
//     var couter = 0;
//     comment.forEach(element => {
//         if(element.postId == id){
//             couter++;
//         }else {
//             console.log('loi roi')
//         }

//     });
//     return  couter;
// }






// muon phan duoc trang thi phai biet nhung thong so sau

// tổng số trang = sumofitems
// số phần tử trong một trang = itemsofpage


//=> có số trang = tổng / số phần tử một trang

//=> numbersofpage = sumofitems / itemofpage

//=vd : tổng 20 items /
// mỗi trang có 10 item
//=> 2 trang

// làm thế nòa để nó hiểu được là trang nhất có 10 items rồi trang hai start sẽ là số 11

/**
 * total=40;
 * perofpage = 10
 * pages= 4;
 * currentpage =  1 2 3 4;
 * 
 * 1 - 10 start 1 = 1 * 1 ; 2 -1; 3 -2; 10 = 9 + 1 ;5* 2;8 +2
 * 11 -20 start 11 = 10 + 1; 9 + 2; 11 *1; 20 = 19 +1; 20*1;18+2;
 * 21-30 start 21 = 20 +1; 22-1;19+2; 30 = 29+1;30*1;28+2;
 * 31-40 start 31= 30 + 1; 40 = 38 + 2
 * 
 * 1 * 1 = 0.10 + 1 ;(currenpage - 1)
 * 10 + 1 = 1.10 + 1 ;
 * 20 + 1 = 2.10 + 1 ;
 * 30 + 1 = 3.10 + 1 ;
 * 
 * 8 + 2 = 0*10 + 8 + 2 =>formula = (currenpage - 1) * perpage + perpage
 * 18 + 2= 1*10 + 8 + 2
 * 28 + 2 =2*10 + 8 + 2
 * 38 + 2 =3*10 + 8 + 2
 * 
 * 
 * 
 *
 * 
 *
 * 
 * => start:(currenpage - 1) * perofpage + 1
 * =>end: (currenpage - 1) * perpage + perpage
 */