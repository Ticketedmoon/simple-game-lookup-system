<?php 

	if (isset($_POST['search']))
	{
		$response = "<ul><li>No data found!</li></ul>";

		$connection = mysqli_connect('127.0.0.1', 'XXX', 'XXX', 'games') or die ("Connection failed...");
		$q = $connection->real_escape_string($_POST['q']); 

		$sql = mysqli_query($connection,"SELECT title FROM games WHERE title LIKE '%$q%'");
		if($sql->num_rows > 0)
		{
			// If we find a matching row in the database.
			$response = "<ul>";

			while($data = $sql->fetch_array())
				$response .= "<li>".$data['title']."</li>";

			$response .= "</ul>";

		}

		// If we don't find a matching row in the datbase.
		exit($response);
	}
?>
