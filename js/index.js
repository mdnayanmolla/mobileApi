const loadPhone = async(searchText,isShowAll) =>{
  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await response.json();
  // console.log(data);
  const phones = data.data;
  displayPhone(phones,isShowAll)
}

const displayPhone = (phones,isShowAll) =>{
  // console.log(phones)
  const phoneContainer = document.getElementById('phone-container')
  phoneContainer.textContent = "";
  
 const showAllConainerBtn = document.getElementById('show-all-container')
 if(phones.length > 12 && !isShowAll){
  showAllConainerBtn.classList.remove('hidden')
 }else{
  showAllConainerBtn.classList.add('hidden')
 }


  if(!isShowAll){
  phones = phones.slice(0,12);
}
  console.log(phones);

  phones.forEach(phone =>{
      console.log(phone)
      const phoneCard = document.createElement('div');
      console.log(phoneCard)
      phoneCard.classList = `card bg-base-100 shadow-xl`
      phoneCard.innerHTML = `
      <figure class="px-10 pt-10">
          <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
          <button onclick="showDetailsBtn('${phone.slug}')" class="btn btn-primary">Buy Now</button>
          </div>
      </div>
      `
    phoneContainer.appendChild(phoneCard);
  });
}

const handleSearchBtn = (isShowAll)=>{
 const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
//    console.log(searchText)
loadPhone(searchText,isShowAll)
}

const showAllBtnHandle = ()=>{
      handleSearchBtn(true)
}

const showDetailsBtn = async(id)=>{
      const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
      const data = await res.json();
      const singleData = data.data;
      // console.log(singleData);
      showDetailsDisplay(singleData)
}
const showDetailsDisplay = (phone)=>{
  console.log(phone);
  

  const detailsImage = document.getElementById('show-details-name');
  const showDetailContainer = document.getElementById('show-details-data');
  showDetailContainer.innerHTML = `
      <div class="card card-compact  bg-base-100">
          <figure><img src="${phone.image}" alt="Shoes" id="details-image" /></figure>
          <div class="card-body">
            <h2 class="card-title" id="show-details-name">${phone.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
  `

  show_datail_modal.showModal()
}
// loadPhone()
// showDetailsLoad()