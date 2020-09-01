<?php include '../model/user_model.php'; ?>

<?php
  $users=get_users();
  echo json_encode($users);
?>