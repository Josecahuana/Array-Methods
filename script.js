const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperature: ['Itellegent', 'Active', 'faithul', 'Trainable', 'Instictual']
    },
    {
        id: 'dog-2',
        name: 'Bernese',
        temperature: ['Itellegent', 'Active', 'faithul', 'Trainable', 'Instictual']
    }
]
/*
find -- devuelve el daot que buscas con un condicion
some -- devuelve true si alguno se cumple
includes -- devuelve true si se encuentra
every -- devuelve true si todos se cumplen
map
filter

*/



const deleteDogs = dogs.filter(dog => dog.name.includes('Bernese'));
console.log(deleteDogs);