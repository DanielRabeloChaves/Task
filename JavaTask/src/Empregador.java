public class Empregador extends Usuario{

  private String cnpj;
  private String areaAtuacao;

  public Empregador (String cnpj, String areaAtuacao){
    this.cnpj=cnpj;
    this.areaAtuacao=areaAtuacao;

  }
  public String getCnpj (){
    return cnpj;
  }
  public void setCnpj (String cnpj){
    this.cnpj=cnpj;
  }
  public String getAreaAtuacao (){
    return areaAtuacao;
  }
  public void setAreaAtuacao (String areaAtuacao){
    this.areaAtuacao=areaAtuacao;
  }

  public void getCriarVaga (String getCriarVaga){

  }
  public void getAtualizarVaga (String getAtualizarVaga){

  }

}