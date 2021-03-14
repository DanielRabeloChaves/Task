class Main {
  public static void main(String[] args) {
    Freelancer free=new Freelancer ("luciano", "Advogado ", "231.241.365-25");
    System.out.println("Freelancer: "+ free.getProfissao() + free.getCpf());

    Empregador emp=new Empregador("12345678", "Alimentos ");
    System.out.println("CNPJ: "+ emp.getCnpj() + " Ramo: " + emp.getAreaAtuacao());

  }
}