const GET_CAT_API="https://cat-fact.herokuapp.com/";
const GET_CAT_FACTS="facts";

async function getcatfacts(){
try{
  const response = await fetch(`${GET_CAT_API}${GET_CAT_FACTS}`)
  const result= await response.json();
  if(result.length > 0){
    renderLists(result);
  }
}catch(error){

  alert("something wrong! please try again")

}
}
getcatfacts();
function renderLists(data = []){
  const ulElement = document.getElementsByClassName ("facts-list")[0];
  console.log(createListItem())
  const liList =[];
  if(data.length > 0){
    data.forEach((_d) => {
      liList.push(createListItem(_d))
    })
  }
  console.log(liList);
  ulElement.append(...liList);
}
function createListItem(item = {}){
  const liItem = document.createElement("li") ;
  liItem.className = "fact-item";
  liItem.innerHTML =` <li class="fact-item">
  <div>
    <p>${item.text}</p>
  </div>
</li>`;
return liItem;
}