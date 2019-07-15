const account = function(accType){
    return {
        accountType: accType,
        balance: 0,
        deposit: function(depositMoney){
            this.balance += depositMoney;
        },
        withdraw: function(withdrawMoney, accountLink){
            const balanceAfterWithdraw = this.balance - withdrawMoney;
            if (balanceAfterWithdraw > -1){
                this.balance = balanceAfterWithdraw;
                return true;
            }else if(accountLink) {
                const resultWithdraw = accountLink.withdraw(balanceAfterWithdraw * -1);
                if (resultWithdraw){
                    this.balance = 0;
                    return true;
                }
            }
            return false;
        }
    }
}