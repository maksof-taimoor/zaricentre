<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class Index extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('index_model');
	}

	public function isLoggedIn() {
		if ($this->auth->isLoggedIn()) {
            echo 'LOGGED_IN';
        } else echo 'LOGGED_OUT';
	}

	public function doLogin(){
		$data = json_decode(file_get_contents("php://input"));
		$response = $this->index_model->doLogin($data);
		echo json_encode($response);
	}
}

?>