import java.util.Date;

public class Candidatura {
  
  private String nomeFreelancer;
  private Date dataEntrevista;
  private String nomeDaEmpresa;
  private String resultado;
  private String recibo;

  public String getNomeFreelancer (){
    return nomeFreelancer;
  }
  public void setNomeFreelancer (String nomeFreelancer){
    this.nomeFreelancer=nomeFreelancer;
  }
  public Date getDataEntrevista (){
    return dataEntrevista;
  }
  public void setDataEntrevista (Date dataEntrevista){
    this.dataEntrevista=dataEntrevista;
  }
  public String getNomeDaEmpresa (){
    return nomeDaEmpresa;
  }
  public void setNomeDaEmpresa (String nomeDaEmpresa){
    this.nomeDaEmpresa=nomeDaEmpresa;
  }
  public String getResultado (){
    return resultado;
  }
  public void setResultado (String resultado){
    this.resultado=resultado;
  }
  public String getRecibo (){
    return recibo;
  }
  public void setRecibo (String recibo){
    this.recibo=recibo;
  }

  public void getExibirResultados (String gerExibirResultados){

  }


}