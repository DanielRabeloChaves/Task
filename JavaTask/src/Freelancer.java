public class Freelancer extends Usuario{
  
  private String profissao;
  private String cpf;
  private String curriculo;

  public Freelancer (String nome, String profissao, String cpf){
    this.profissao=profissao;
    this.cpf=cpf;
  }
  Freelancer (String garcon_, String _23145987){
    throw new UnsupportedOperationException("Not supported yet.");
  }

  public String getProfissao (){
    return profissao;
  }
  public void setProfissao (String profissao){
    this.profissao=profissao;
  }
  public String getCpf (){
    return cpf;
  }
  public void setCpf (String cpf){
    this.cpf=cpf;
  }
  public String getCurriculo (){
    return curriculo;
  }
  public void setCurriculo (String curriculo){
    this.curriculo=curriculo;
  }

  public void getCandidatarVaga (String getCandidatarVaga){

  }

}