public class Usuario{

  private String nome;
  protected String emailDeContato;
  private String telefone;
  private String foto;
  private String endereco;

  public String getNome (){
    return nome;
  }
  public void setNome (String nome){
    this.nome=nome;
  }
  public String getEmailDeContato (){
    return emailDeContato;
  }
  public void setEmailDeContato (String emailDeContato){
    this.emailDeContato=emailDeContato;
  }
  public String getTelefone (){
    return telefone;
  }
  public void setTelefone (String telefone){
    this.telefone=telefone;
  }
  public String getFoto (){
    return foto;
  }
  public void setFoto (String foto){
    this.foto=foto;
  }
  public String getEndereco (){
    return endereco;
  }
  public void setEndereco (String Endereco){
    this.endereco=endereco;
  }

  public void getLocalizarEndereco (String getLocalizarEndereco){

  }
  public void getPesquisarVaga (String getPesquisarVaga){

  }

}