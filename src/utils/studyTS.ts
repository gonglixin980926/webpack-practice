interface SuperType {
    base: string;
}
interface SubType extends SuperType {
    addition: string;
};

// subtype compatibility
let superType: SuperType = { base: 'base' };
let subType: SubType = { base: 'myBase', addition: 'myAddition' };
superType = subType;
console.log(subType)

// Covariant
type Covariant<T> = T[];
let coSuperType: Covariant<SuperType> = [];
let coSubType: Covariant<SubType> = [];
coSuperType = coSubType;

// Contravariant --strictFunctionTypes true
type Contravariant<T> = (p: T) => void;
let contraSuperType: Contravariant<SuperType> = function(p) {}
let contraSubType: Contravariant<SubType> = function(p) {}
contraSubType = contraSuperType;

// Bivariant --strictFunctionTypes false
type Bivariant<T> = (p: T) => void;
let biSuperType: Bivariant<SuperType> = function(p) {}
let biSubType: Bivariant<SubType> = function(p) {}
// both are ok
biSubType = biSuperType;
biSuperType = biSubType;

// Invariant --strictFunctionTypes true
type Invariant<T> = { a: Covariant<T>, b: Contravariant<T> };
let inSuperType: Invariant<SuperType> = { a: coSuperType, b: contraSuperType }
let inSubType: Invariant<SubType> = { a: coSubType, b: contraSubType }
// both are not ok
// inSubType = inSuperType;
