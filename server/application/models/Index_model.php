<?php
class Index_model extends CI_Model
{
    var $tbluser = "tbluser";
    var $tbladmportal = "tbladmportal";
    var $tblcodes = "tblcodes";
    var $tblnotifications = "tblnotifications";
    
    
    function doLogin($data) {       
        $data = $this->cleanInputData($data);
        $unm = $data->username;
        $pwd = $data->password;
        $this->db->where('username', $unm);      
        $this->db->where('password', $pwd); 
        $res = $this->db->get($this->tbladmportal)->result_array();
        if (count($res) > 0) {
            $code = $this->generateCode();
            $this->updateCode($res[0]['m_id'], $code);
            $data = array('status'=> "OK",'userid'=>$res[0]['m_id'],'code'=>$code);
        }else{
            $data = array('status'=> "FAIL",);
        }
        return $data;
    }

    public function getUserDetails($id) {
        $this->db->where('m_id', $id);
        $res = $this->db->get($this->tbladmportal);
        return $res->result_array();
    }

    function cleanInputData($data) {
        
        foreach ($data as &$value) {
            $value = $this->security->xss_clean($value);
        }
        return $data;
    }
}
?>