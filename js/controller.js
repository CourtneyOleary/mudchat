function Controller() {


  Controller.prototype.clearDiv = function(element) {
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }

 }

 Controller.prototype.buildAddUser = function() {
  var div = document.getElementById('page-content-wrapper');
  var frag = document.createElement('div');
  frag.innerHTML = '<p>a small child</p>';
  console.log(userListRef.name)
  userListRef.on('value', function(snapshot) {
    var users = snapshot.val();
    var leName = document.createElement('li');
    for (var i in users) {
      console.log(users[i].name)
      leName.innerHTML = users[i].name;
      div.appendChild(leName);
    }



  })

  div.appendChild(frag);



 }

}
