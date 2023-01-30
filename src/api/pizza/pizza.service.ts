
export interface IPizzaService {
    getPizza(ingredients: string[], base: string): string;
}


export class PizzaService implements IPizzaService {

    getPizza(ingredients: string[], base: string): string {
        const pizz = this.cookPizza(ingredients, base);

        return pizz.getDescription() + ', prix ' + pizz.getPrice()
    }

    private cookPizza(ingredients: string[], base: string): Pizza {

        let pizza:Pizza;

        if (base == "creme") {
            pizza = new BasicPizzaCreme()
        } else {
            pizza = new BasicPizzaTomate()
        }
        ingredients.forEach((ingredient) => {
            if(ingredient == 'champi' ) pizza = new Champignon(pizza)
            if(ingredient == 'jambon' ) pizza = new Jambon(pizza)
            if(ingredient == 'gingembre' ) pizza = new Gingembre(pizza)
            if(ingredient == 'poulet' ) pizza = new Poulet(pizza)
            if(ingredient == 'ananas' ) pizza = new Ananas(pizza)
            if(ingredient == 'chorizo' ) pizza = new Chorizo(pizza)
            if(ingredient == 'fromage' ) pizza = new Fromage(pizza)
            if(ingredient == 'poivron' ) pizza = new Poivron(pizza)
            if(ingredient == 'bacon' ) pizza = new Bacon(pizza)
            if(ingredient == 'tomate' ) pizza = new Tomate(pizza)
            if(ingredient == 'piment' ) pizza = new Piment(pizza)
            if(ingredient == 'cornichon' ) pizza = new Cornichon(pizza)
        })

        return pizza
    }

}

export interface Pizza {
    getDescription(): string;
    getPrice(): number;
}

class BasicPizzaTomate implements Pizza {
    getDescription(): string {
        return "Pizza base sauce tomate";
    }
    getPrice(): number {
        return 8;
    }
}

class BasicPizzaCreme implements Pizza {
    getDescription(): string {
        return "Pizza base Creme";
    }
    getPrice(): number {
        return 10;
    }
}

abstract class DecorateurIngredient implements Pizza {
    constructor(pizza: Pizza) {
        this.pizza = pizza
    }

    abstract getDescription(): string 
    abstract getPrice(): number 
    protected pizza: Pizza;// Dessert sur leuquel on applique l'ingrédient.

}


class Champignon extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Champi'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 2;
    }
} 

class Jambon extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Jambon'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 5;
    }
} 

class Gingembre extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Gingembre'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 4;
    }
} 

class Ananas extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Ananas'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 20;
    }
} 

class Poulet extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Poulet'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 10;
    }
}

class Chorizo extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Chorizo'
    }
    getPrice(): number {
        return this.pizza.getPrice() + .5;
    }
} 

class Fromage extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Fromage'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 1.5;
    }
} 

class Poivron extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', Poivron'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 2.5;
    }
} 

class Bacon extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', bacon'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 4.5;
    }
}

class Tomate extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', tomate'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 3;
    }
}

class Piment extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', piment'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 1.5;
    }
}

class Cornichon extends DecorateurIngredient {
    getDescription(): string {
        return this.pizza.getDescription() + ', cornichon'
    }
    getPrice(): number {
        return this.pizza.getPrice() + 5;
    }
}