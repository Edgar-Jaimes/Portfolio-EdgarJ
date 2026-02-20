
window.onload = function () {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "none";
    updateView();
  };
  
  function showFilter() {
    document.getElementById("newContent").style.display = "none";
    document.getElementById("filterContent").style.display = "block";
  }
  
  function showAddNew() {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "flex";
  }
  // check boxes
  function updateView() {
    let box1 = document.getElementById("opinionCheckbox").checked;
    let box2 = document.getElementById("recipeCheckbox").checked;
    let box3 = document.getElementById("updateCheckbox").checked;
  
    showArticles("opinion", box1);
    showArticles("recipe", box2);
    showArticles("update", box3);
  }
  
  function showArticles(className, shouldShow) {
    let articleList = document.querySelectorAll("#articleList article." + className);
  
    for (let x = 0; x < articleList.length; x++) {
      if (shouldShow) {
        articleList[x].style.display = "";
      } else {
        articleList[x].style.display = "none";
      }
    }
  }
  // add article
  function addNewArticle() {
  
    let headerInput = document.getElementById("inputHeader").value.trim();
    let textInput = document.getElementById("inputArticle").value.trim();
  
    let chosenType = "";
    let labelText = "";
  
    if (document.getElementById("opinionRadio").checked) {
      chosenType = "opinion";
      labelText = "Opinion";
    }
  
    if (document.getElementById("recipeRadio").checked) {
      chosenType = "recipe";
      labelText = "Recipe";
    }
  
    if (document.getElementById("lifeRadio").checked) {
      chosenType = "update";
      labelText = "Update";
    }
  
    if (headerInput == "" || textInput == "" || chosenType == "") {
      alert("Please complete all fields.");
      return;
    }
  
    let newBox = document.createElement("article");
    newBox.className = chosenType;
  
    newBox.innerHTML =
      "<span class='marker'>" + labelText + "</span>" +
      "<h2>" + headerInput + "</h2>" +
      "<p>" + textInput + "</p>" +
      "<p><a href='moreDetails.html'>Read more...</a></p>";
  
    document.getElementById("articleList").appendChild(newBox);
  
    // clear form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;
  
    updateView();  
  }
    // refresh
    window.filterArticles = updateView;

