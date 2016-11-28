  var uploader = uploader || {};

  uploader.delfield = function (obj) {
    obj.onclick = null;
    obj.parentNode.parentNode.removeChild(obj.parentNode);
  }

  uploader.addfield = function (GLOB) {

    var DOC = GLOB.document,
      wrapper = DOC.getElementById("filewrapper"),
      htmlP = DOC.createElement("div"),
      htmlLabel = DOC.createElement("label"),
      htmlMark = DOC.createElement("mark"),
      htmlMarkText = DOC.createTextNode("Файл не выбран"),
      htmlInput = DOC.createElement("INPUT"),
      htmlButton = DOC.createElement("BUTTON"),
      htmlButtonText = DOC.createTextNode("DEL"),
      htmlButtonSelectText = DOC.createTextNode("Выбрать"),
      htmlButtonSelect = DOC.createElement("span");
    
    htmlButtonSelect.append(htmlButtonSelectText);
    htmlMark.append(htmlMarkText);
    htmlLabel.setAttribute("for", "load_file");
    htmlLabel.setAttribute("class", "file_upload");
    htmlInput.setAttribute("id", "load_file");
    htmlButton.setAttribute("class", "file-del-btn");
    htmlP.setAttribute("class", "buttons-row");

    htmlInput.name = "file[]";
    htmlInput.type = "file";
    htmlInput.size = "30";

    htmlButton.onclick = function () {
      uploader.delfield(htmlButton)
    };

    wrapper.appendChild(htmlP);
    htmlP.appendChild(htmlLabel);
    htmlLabel.appendChild(htmlButtonSelect);
    htmlLabel.appendChild(htmlMark);
    htmlLabel.appendChild(htmlInput);
    htmlP.appendChild(htmlButton);
    htmlButton.appendChild(htmlButtonText);
  }