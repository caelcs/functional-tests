

class HomePage {
  static visit() {
    cy.visit('/');
  }

  static expectNavigationBar() {
    return {
      toExists: () => {
        cy.get('.navbarContainer').should(($div) => {
          expect($div).to.have.length(1);
        });
      },
    };
  }

  static expectFooter() {
    return {
      toExists: () => {
        cy.get('.footerContainer').should(($div) => {
          expect($div).to.have.length(1);
        });
      },
    };
  }

  static expectProductButton() {
    return this.expect('.heroButton');
  }

  static expect(component) {
    return {
      toBeVisible: () => {
        cy.get(`${component}`).should(($div) => {
          expect($div).to.have.length(1);
          // eslint-disable-next-line no-unused-expressions
          expect($div).to.be.visible;
        });
      },
    };
  }

  static expectMenus() {
    return {
      toHaveSameSizeAs: (expectedSize) => {
        cy.get('.navbarSections').find('a').should(($a) => {
          expect($a).to.have.length(expectedSize);
        });
      },
    };
  }
}

export default HomePage;
