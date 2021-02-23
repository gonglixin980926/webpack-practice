// 简单工厂模式：根据条件返回构造函数
abstract class CashSuper {
    abstract acceptCash(money: number): number
}

class NormalCash extends CashSuper{
    acceptCash(money: number): number {
        return money
    }
}

class DisCountCash extends CashSuper{
    dicCount: number
    constructor(disCount: number){
        super()
        this.dicCount = disCount
    }
    acceptCash(money: number): number {
        return money * this.dicCount
    }
}

class ReductionCash extends CashSuper{
    fullMoney: number
    reduceMoney: number
    constructor(fullMoney: number, reduceMoney: number){
        super()
        this.fullMoney = fullMoney
        this.reduceMoney = reduceMoney
    }
    acceptCash(money: number): number {
        return money > this.fullMoney ? money - (money / this.fullMoney) * this.reduceMoney : money
    }
}

// 工厂模式
class CashFactory {
    static createCashAccept(type: string){
        let res = null
        switch(type){
            case 'normal':
            res = new NormalCash()
            case 'disCount':
            res = new DisCountCash(0.8)
            case 'reduce':
            res = new ReductionCash(300,200)
        }
    }
}


// 策略模式与简单工厂结合
class Cashcontext {
    private cs: CashSuper
    constructor() {
    }
    cashContext(type: string){ //简单工厂
        switch(type){
            case 'normal':
            this.cs = new NormalCash()
            case 'disCount':
            this.cs = new DisCountCash(0.8)
            case 'reduce':
            this.cs = new ReductionCash(300,200)
        }
    }
    getMoney(money: number){
        return this.cs.acceptCash(money)
    }
}

function  addEventListener() {
    let calculation = document.getElementById('calculation') as HTMLSelectElement
    calculation.onchange = function (e) {
        console.log(calculation.selectedIndex)
    }
}

(function(){
    addEventListener()
    // 工厂模式调用

}())