const btnClose = document.getElementById("closeModalCreate");
console.log(btnClose);

const handleCloseModalCreate = () => {
  const modalCreate = document.querySelector(".model_create_product");
  modalCreate.style.display = "none";
};

const handleCloseModalEdit = () => {
  const modalCreate = document.querySelector(".add_modify_sp");
  modalCreate.style.display = "none";
};

const handleClickCreate = () => {
  const modalCreate = document.querySelector(".model_create_product");
  modalCreate.style.display = "block";
};

const handleClickEditProduct = () => {
  const modalCreate = document.querySelector(".add_modify_sp");
  modalCreate.style.display = "block";
};


