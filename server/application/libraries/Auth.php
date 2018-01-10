<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth {

  public function __construct(){
  //Load library
        $this->CI =& get_instance();
      $this->CI->load->library('session');
      
  }
  
    public function isLoggedIn()
    {
      //$login = $this->CI->session->userdata('logged_in');
      if($this->CI->session->userdata('logged_in')){
        return true;
      }else{
        return false;
      }

    }

    public function isAdmin(){
      if($this->isLoggedIn()){
        $role =  $this->CI->session->userdata('role');
        if($role == 'ADMIN')
          return true;
      } else return false;
    }    
    
    public function getAuthData(){
      return $this->CI->session->userdata('logged_in');
    }

    public function getUsername(){
      $u = $this->CI->session->userdata('logged_in');
      return $u[0]['username'];
    }

    public function getEmail(){
      $u = $this->CI->session->userdata('logged_in');
      return $u['email'];
    }

    public function getRole(){
      $u = $this->CI->session->userdata('logged_in');
      return $u[0]['role'];
    }
    
   public function LoggedOut()
   {
      $array_items = array('username' => '',
               'email' => '',
               'icq' => '',
               'role' => '',
               'logged_in' => '0'
      );
      $this->CI->session->unset_userdata($array_items);
      $this->CI->session->sess_destroy();
      return true;
   }

}