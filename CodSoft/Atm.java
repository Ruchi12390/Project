import java.util.*;
class bankAccount{
    double balance;
    bankAccount(double balance){
        this.balance=balance;
    }
    double getBalance(){
      return balance;
    }
    void deposit(double balance1){
        if(balance>0){
            this.balance=this.balance+balance1;
            System.out.println(balance1+" is Deposited");
            System.out.println("The current amount is "+this.balance);
        }
        else{
            System.out.println("Invalid amount");
        }
    }
    void withdraw(double balance1){
        if(balance1<=this.balance && balance1>0){
            this.balance=this.balance-balance1;
            System.out.println(balance1+" is Withdraw");
            System.out.println("The Current Amount is "+this.balance);
        }
        else{
            System.out.println("Insufficient Balance");
        }
    }
}
 class ATM {
    bankAccount bank;
    ATM(bankAccount account){
        this.bank=account;
    }
    void currentAmount(){
       System.out.println("The Current Amount is "+bank.getBalance());
    }
    void depositAmount(double balance){
        bank.deposit(balance);
    }
    void withdrawAmount(double balance){
        bank.withdraw(balance);
    }
    public static void main(String args[]){
        bankAccount bank=new bankAccount(2000);
        ATM a=new ATM(bank);
        Scanner sc=new Scanner(System.in);
        int ab=1;
        while(ab!=0){
            System.out.println("Welcome!please Choose an option");
            System.out.println("1.Check Balance");
            System.out.println("2.Deposit");
            System.out.println("3.Withdraw");
            System.out.println("4.Exit");
            int option =sc.nextInt();
            switch (option) {
                case 1:
                    a.currentAmount();
                    break;
                case 2:
                    System.out.println("Enter The Amount:");
                    double bal=sc.nextDouble();
                    a.depositAmount(bal);
                    break;
                case 3:
                    System.out.println("Enter The Amount:");
                    double bal1=sc.nextDouble();
                    a.withdrawAmount(bal1);
                    break;
                case 4:
                    ab=0;
                    break;
                default:
                    System.out.println("Invalid option");
                    break;
            }
        }
        sc.close();
    }
}
