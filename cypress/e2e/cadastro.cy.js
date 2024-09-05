describe('funcionalidades de cadastro', () => {

  beforeEach(() => {
    // 1. Executar o navegador
    // 2. Navegar para a url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com');
  });

  it('cadastrar um novo usuário', () => { 
    // 3. Validar que a página inicial carregou com sucesso
    cy.get('a > img').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');

    // 4. Clicar no botão “Signup / Login”
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // 5. Validar que 'New User Signup!' está visível
    cy.get('.signup-form > h2').should('be.visible');

    // 6. Entrar com nome e e-mail
    cy.get('[data-qa="signup-name"]').type('Matheus');
    cy.get('[data-qa="signup-email"]').type('m3243@gmail.com.br');

    // 7. Clicar no botão “Signup”
    cy.get('[data-qa="signup-button"]').click();

    // 8. Validar que a label “ENTER ACCOUNT INFORMATION” está visível
    cy.get(':nth-child(1) > b').should('be.visible');

    // 9. Preencher os campos: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender1').click();
    cy.get('[data-qa="name"]').clear().type('Matheus');
    cy.get('[data-qa="email"]').should('have.value', 'm3243@gmail.com.br');
    cy.get('[data-qa="password"]').type('password');
    cy.get('[data-qa="days"]').select('5');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('2003');

    // 10. Selecionar o checkbox “Sign up for our newsletter!”
    cy.get('#newsletter').click();

    // 11. Selecionar o checkbox “Receive special offers from our partners!”
    cy.get('#optin').click();

    // 12. Preencher os campos: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type('Matheus');
    cy.get('[data-qa="last_name"]').type('Almeida');
    cy.get('[data-qa="company"]').type('Study');
    cy.get('[data-qa="address"]').type('Passagem dalva 259');
    cy.get('[data-qa="address2"]').type('Avenida dalva');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('Pará');
    cy.get('[data-qa="city"]').type('Belém');
    cy.get('[data-qa="zipcode"]').type('66615080');
    cy.get('[data-qa="mobile_number"]').type('91981444749');
    
    // 13. Clicar em "Create Account button"
    cy.get('[data-qa="create-account"]').click();

    // 14. Validar que a mensagem "ACCOUNT CREATED!"" está visível
    cy.get('[data-qa="account-created"]').should('be.visible');

    // 15. Clicar no botão "Continue"
    cy.get('[data-qa="continue-button"]').click();
    
    // 16. Validar que o nome de usuário "Logged in as $username" está visível
    cy.get('b').should('have.text', 'Matheus')

    // 17. Clicar no botão 'Delete Account'
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

    // 18. Validar que a mensagem "ACCOUNT DELETED!" está visível e clicar no botão "Continue"
    cy.get('[data-qa="account-deleted"]').should('be.visible');
  });
});
it('Teste de login', () => { 
  it('Teste de login', () => { 
    // 1. Clicar no botão “Signup / Login”
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // 2. Validar que 'Login to your account' está visível
    cy.get('.login-form > h2').should('be.visible').and('contain', 'Login to your account');

    // 3. Inserir o e-mail e a senha do usuário
    cy.get('[data-qa="login-email"]').type('matheus3243@gmail.com.br');
    cy.get('[data-qa="login-password"]').type('password');

    // 4. Clicar no botão “Login”
    cy.get('[data-qa="login-button"]').click();

    // 5. Validar que o usuário está logado com sucesso e o nome "Logged in as Matheus" aparece
    cy.get('b').should('have.text', 'Matheus');

    // 6. Fazer logout
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // 7. Validar que o usuário saiu da conta e está na tela de login
    cy.get('.login-form > h2').should('be.visible').and('contain', 'Login to your account');
  });
  });
  describe('Teste de exclusão de produto do carrinho', () => {

    beforeEach(() => {
      // Executar o navegador e navegar para a URL
      cy.visit('https://automationexercise.com');
    });
  
    it('Deve adicionar um produto ao carrinho e excluí-lo em seguida', () => {
      // 1. Validar que a página inicial foi carregada corretamente
      cy.get('a > img').should('be.visible');
      
      // 2. Scroll até os produtos
      cy.get('.features_items').scrollIntoView();
  
      // 3. Verificar que os produtos estão visíveis
      cy.get('.features_items').should('be.visible');
  
      // 4. Adicionar o primeiro produto visível ao carrinho
      cy.get('.features_items .product-image-wrapper').first().within(() => {
        cy.contains('Add to cart').click();
      });
  
      // 5. Validar que o modal de confirmação de adição ao carrinho está visível
      cy.get('#cartModal .modal-content').should('be.visible');
  
      // 6. Clicar no botão "View Cart" dentro do modal para ir à página do carrinho
      cy.get('#cartModal').find('a[href="/view_cart"]').should('be.visible').click();
  
      // 7. Verificar se a página do carrinho foi carregada corretamente
      cy.url().should('include', '/view_cart');
      cy.get('.cart_info').should('be.visible'); // Verifica se os detalhes do carrinho estão visíveis
  
      // 8. Excluir o produto do carrinho
      cy.get('.cart_delete a').click(); // Clica no botão de exclusão (ícone "X")
  
      // 9. Validar que o carrinho está vazio após a exclusão
      cy.contains('Cart is empty').should('be.visible'); // Valida que a mensagem de carrinho vazio está visível
    });
  
  });
  