<?php
function get_users(){
  include 'conn.php';
  $sql="SELECT * FROM users";
  $result = $db->query($sql);
  $users_data=$result->fetchAll(PDO::FETCH_ASSOC);
  return $users_data;
}

function get_user($id) {
  include 'conn.php';
  $stmt = $db->prepare("SELECT * FROM  users  WHERE id=:id");
  $stmt ->bindParam(':id',$id);
  $stmt->execute();
  $users_data = $stmt->fetch(PDO::FETCH_ASSOC);
  return $users_data;
}

function add_user($data){
  include 'conn.php';
  $sql = "INSERT INTO users (id, fn, ln) VALUES (?,?,?)";
  $res=$db->prepare($sql)->execute([$data['id'], $data['fn'], $data['ln']]);
  if($res){
    var_dump(http_response_code());
  }
  else {
    header(':', true, 409);
    header('X-PHP-Response-Code: 409', true, 409);
  }
}

function update_user($id, $insert_data){
  include 'conn.php';
  $sql = "UPDATE users SET fn=?, ln=? WHERE id= ?";
  $res=$db->prepare($sql)->execute([$insert_data['fn'], $insert_data['ln'], $id]);
  if($res){
    var_dump(http_response_code());
  }
  else {
    header(':', true, 409);
    header('X-PHP-Response-Code: 409', true, 409);
  }
}

function delete_user($id){
  include 'conn.php';
  $stmt = $db->prepare("DELETE FROM  users  WHERE id=:id");
  $stmt ->bindParam(':id',$id);
  $stmt->execute();
  $count = $stmt->rowCount();
  if($count >0){
    var_dump(http_response_code());
  }
  else {
    header(':', true, 409);
    header('X-PHP-Response-Code: 409', true, 409);
  }
}
?>