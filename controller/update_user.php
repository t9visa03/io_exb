<?php include '../model/user_model.php'; ?>

<?php
  //print_r($_POST);
  $id=$_GET['id'];
  $insert_data=array(
    'fn'=>$_POST['fn'],
    'ln'=>$_POST['ln'],
  );
  update_user($id, $insert_data);
?>