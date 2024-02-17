window.addEventListener("load", solve);

function solve() {
  let form = document.getElementsByClassName("snowman")[0];
  form.addEventListener("submit", prevent);
  function prevent(event) {
    event.preventDefault();
  }
  let snowmanNameRef = document.getElementById("snowman-name");
  let snowmanHeightRef = document.getElementById("snowman-height");
  let locationRef = document.getElementById("location");
  let creatorNameRef = document.getElementById("creator-name");
  let specialAttributeRef = document.getElementById("special-attribute");

  let snowmanPreviewRef = document.getElementsByClassName("snowman-preview")[0];

  let addBtn = document.getElementsByClassName("add-btn")[0];

  addBtn.addEventListener("click", addHandler);

  function addHandler(event) {
    if (snowmanNameRef.value != "" && snowmanHeightRef.value != "" && locationRef.value != "" && creatorNameRef.value != "" && specialAttributeRef.value != "") {
      addBtn.disabled = true;
      let li = document.createElement("li");
      li.setAttribute("class", "snowman-info");

      let article = document.createElement("article");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let p5 = document.createElement("p");

      p1.textContent = `Name: ${snowmanNameRef.value}`;
      p2.textContent = `Height: ${snowmanHeightRef.value}`;
      p3.textContent = `Location: ${locationRef.value}`;
      p4.textContent = `Creator: ${creatorNameRef.value}`;
      p5.textContent = `Attribute: ${specialAttributeRef.value}`;

      snowmanPreviewRef.appendChild(li);
      li.appendChild(article);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(p4);
      article.appendChild(p5);

      let div = document.createElement("div");
      div.setAttribute("class", "btn-container");

      let editBtn = document.createElement("button");
      editBtn.setAttribute("class", "edit-btn");
      editBtn.textContent = "Edit";

      let nextBtn = document.createElement("button");
      nextBtn.setAttribute("class", "next-btn");
      nextBtn.textContent = "Next";

      div.appendChild(editBtn);
      div.appendChild(nextBtn);
      li.appendChild(div);


      let sNValue = snowmanNameRef.value;
      let sHValue = snowmanHeightRef.value;
      let lValue = locationRef.value;
      let cNValue = creatorNameRef.value;
      let sAValue = specialAttributeRef.value;

      snowmanNameRef.value = "";
      snowmanHeightRef.value = "";
      locationRef.value = "";
      creatorNameRef.value = "";
      specialAttributeRef.value = "";



      editBtn.addEventListener("click", editHandler);

      function editHandler(event) {
        addBtn.disabled = false;
        snowmanNameRef.value = sNValue;
        snowmanHeightRef.value = sHValue;
        locationRef.value = lValue;
        creatorNameRef.value = cNValue;
        specialAttributeRef.value = sAValue;

        div.remove();
        li.remove();
      }

      nextBtn.addEventListener("click", nextHandler);

      function nextHandler(event) {

        let snowListRef = document.getElementsByClassName("snow-list")[0];
        let liSnow = document.createElement("li");
        liSnow.setAttribute("class", "snowman-content");

        let articleSnow = document.createElement("article");
        let p1Snow = document.createElement("p");
        let p2Snow = document.createElement("p");
        let p3Snow = document.createElement("p");
        let p4Snow = document.createElement("p");
        let p5Snow = document.createElement("p");

        
        p1Snow.textContent = `Name: ${sNValue}`;
        p2Snow.textContent = `Height: ${sHValue}`;
        p3Snow.textContent = `Location: ${lValue}`;
        p4Snow.textContent = `Creator: ${cNValue}`;
        p5Snow.textContent = `Attribute: ${sAValue}`;
        
        snowListRef.appendChild(liSnow);
        liSnow.appendChild(articleSnow);

        articleSnow.appendChild(p1Snow);
        articleSnow.appendChild(p2Snow);
        articleSnow.appendChild(p3Snow);
        articleSnow.appendChild(p4Snow);
        articleSnow.appendChild(p5Snow);

        
        
        let sendBtn = document.createElement("button");
        sendBtn.setAttribute("class", "send-btn");
        sendBtn.textContent = "Send";
        
        articleSnow.appendChild(sendBtn);

        div.remove();
        li.remove();

        sendBtn.addEventListener("click", sendHandler);

        function sendHandler(event) {

          let mainRef = document.getElementById("hero");
          let bodyRef = document.getElementsByClassName("body")[0];

          mainRef.remove();

          let imgRef = document.getElementById("back-img");
          imgRef.hidden = false;

          let backBtn = document.createElement("button");
          backBtn.setAttribute("class", "back-btn");
          backBtn.textContent = "Back";
          
          bodyRef.appendChild(backBtn);

          backBtn.addEventListener("click", backHandler);

          function backHandler(event) 
          {
            backBtn.remove()
            location.reload()
          }
        }
      }
    }
  }
}
