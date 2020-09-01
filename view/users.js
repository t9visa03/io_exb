function getUsers() {
    var xmlUsers = new XMLHttpRequest();
    xmlUsers.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let data='<table border="1"><tr><th>Id</th> <th>Firstname</th> <th>Lastname</th> </tr>';
          let users=JSON.parse(this.response);
            for(x in users) {
              data+='<tr>';
              data+='<td>'+users[x].id+'</td><td>'+users[x].fn+'</td><td>'+users[x].ln+'</td>';
              data+='</tr>';
            }
            data+='</table>';
            console.log(data);
            document.getElementById("results").innerHTML = data;
        }
    }
    xmlUsers.open("GET", "http://localhost/io_exb/controller/get_users.php");
    xmlUsers.send();
  }

  function getUser() {
    var id=document.getElementById('userid').value;
    console.log("id=",id);
    var xmlUsers = new XMLHttpRequest();
    xmlUsers.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let data='<table border="1"><tr><th>Id</th> <th>Firstname</th> <th>Lastname</th> </tr>';
          let users=JSON.parse(this.response);
              data+='<tr>';
              data+='<td>'+users.id+'</td><td>'+users.fn+'</td><td>'+users.ln+'</td>';
              data+='</tr>';
            data+='</table>';
            console.log(data);
            document.getElementById("results").innerHTML = data;
        }
    }
    xmlUsers.open("GET", "http://localhost/io_exb/controller/get_user.php?id="+id);
    xmlUsers.send();
  }

  function addUser() {
    var url =
      'http://localhost/io_exb/controller/add_user.php';
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    var form = document.getElementById('addForm');
    var formData = new FormData(form);
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById('results').innerHTML = 'User added succesfully';
      } else {
        document.getElementById('results').innerHTML = 'Something went wrong';
      }
    };
    xhttp.send(formData);
  }

  function getUpdateData() {
    var id=document.getElementById('updateid').value;
    var updatefn=document.getElementById('updatefn');
    var updateln=document.getElementById('updateln');
    console.log("id=",id);
    var xmlUsers = new XMLHttpRequest();
    xmlUsers.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let users=JSON.parse(this.response);
          updatefn.value=users.fn;
          updateln.value=users.ln;
          document.getElementById('results').innerHTML = 'Person found';
        }
        else {
          document.getElementById('results').innerHTML = 'Something went wrong';
        }
    }
    xmlUsers.open("GET", "http://localhost/io_exb/controller/get_user.php?id="+id);
    xmlUsers.send();
  }

  function updateUser() {
      var id=document.getElementById("updateid").value;
      console.log("update id="+id);
    var url =
      'http://localhost/io_exb/controller/update_user.php?id='+id;
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    var form = document.getElementById('updateForm');
    var formData = new FormData(form);
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById('results').innerHTML = 'User updates succesfully';
      } else {
        document.getElementById('results').innerHTML = 'Something went wrong';
      }
    };
    xhttp.send(formData);
  }

  function deleteUser() {
    var id=document.getElementById('deleteid').value;
    console.log("id=",id);
    var xmlUsers = new XMLHttpRequest();
    xmlUsers.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById('results').innerHTML = 'User deleted succesfully';
        }
        else {
          document.getElementById('results').innerHTML = 'Something went wrong';
        }
    }
    xmlUsers.open("GET", "http://localhost/io_exb/controller/delete_user.php?id="+id);
    xmlUsers.send();
  }