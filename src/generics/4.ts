type TypeUser = {
    name: string;
    surname: string;
    email: string;
    password: string;
   }
   
   function createOrUpdateUser(initialValues: Partial<TypeUser>) {
   }
   
   createOrUpdateUser({ 
     email: 'user@mail.com', 
     password: 'password123' 
   });