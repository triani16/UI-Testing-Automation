describe('Success Login', () => {
    it('Get commands querying',()=>{
        //Buka Page dari sebuah browser
        cy.visit('kasirdemo.belajarqa.com')

        //Web sudah contains element/kata
        cy.contains('hai, kasirAja')

        cy.get('#email')
             .type('trianikamila@gmail.com')    
             .should('have.value','trianikamila@gmail.com')  

        cy.get('#password')
             .type('triani123@')    
             .should('have.value','triani123@')  
         
        cy.contains('login').click()


        // //Back to one page
     })

    it('Success Add Produk', () => {
        cy.visit('kasirdemo.belajarqa.com')
        cy.contains('hai, kasirAja')
        cy.get('#email')
             .type('trianikamila@gmail.com')    
             .should('have.value','trianikamila@gmail.com') 
        cy.get('#password')
             .type('triani123@')    
             .should('have.value','triani123@')  
        cy.contains('login').click()
        cy.contains('dashboard')
        cy.contains('produk').click()
        cy.contains('tambah').click()
        cy.get('#nama')
            .type('jaket')    
            .should('have.value','jaket') 
        cy.get('#deskripsi')
            .type('pakaian')    
            .should('have.value','pakaian') 
        cy.contains('harga beli').click()
            .type('200000')    
            // .should('have.value','100000') 
        cy.contains('harga jual').click()
            .type('230000')    
        //     .should('have.value','130000') 
        cy.get('#stok')
            .clear()
            .type('10')    
            .should('have.value','10') 
        cy.get('#kategori').click()
        cy.contains('Umum').click()
        cy.contains('simpan').click()
        cy.contains('success')
    
    })

    it('Success Create User', () => {
        cy.visit('kasirdemo.belajarqa.com')
        cy.contains('hai, kasirAja')
        cy.get('#email')
            .type('trianikamila@gmail.com')    
            .should('have.value','trianikamila@gmail.com') 
        cy.get('#password')
            .type('triani123@')    
            .should('have.value','triani123@')  
        cy.contains('login').click()
        cy.contains('dashboard')
        cy.contains('pengguna').click()
        cy.contains('tambah').click()
        cy.get('#nama')
            .type('andi')    
            .should('have.value','andi') 
        cy.get('#email')
            .type('andi@coba.com')    
            .should('have.value','andi@coba.com') 
        cy.get('#password')
            .type('andii123')    
            .should('have.value','andii123') 
        cy.contains('simpan').click()
        cy.contains('success')
    })

})

