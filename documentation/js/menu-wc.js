'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">clasificacion-de-libros documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GestionDePrestamosModule.html" data-type="entity-link" >GestionDePrestamosModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntrastructureModule.html" data-type="entity-link" >IntrastructureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-IntrastructureModule-194e783403133dcd4c3e21bb86727489ba86a8ab9323a03ca7f6111a5eb76eb8d3e09a4a1232abd253d25e8607bb82597bea8204e4a774660c2b80763ab76888"' : 'data-target="#xs-controllers-links-module-IntrastructureModule-194e783403133dcd4c3e21bb86727489ba86a8ab9323a03ca7f6111a5eb76eb8d3e09a4a1232abd253d25e8607bb82597bea8204e4a774660c2b80763ab76888"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IntrastructureModule-194e783403133dcd4c3e21bb86727489ba86a8ab9323a03ca7f6111a5eb76eb8d3e09a4a1232abd253d25e8607bb82597bea8204e4a774660c2b80763ab76888"' :
                                            'id="xs-controllers-links-module-IntrastructureModule-194e783403133dcd4c3e21bb86727489ba86a8ab9323a03ca7f6111a5eb76eb8d3e09a4a1232abd253d25e8607bb82597bea8204e4a774660c2b80763ab76888"' }>
                                            <li class="link">
                                                <a href="controllers/ClassificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntrastructureModule.html" data-type="entity-link" >IntrastructureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-IntrastructureModule-87918e0dc124b7d8c0d72302233b5e3ef45b05e9be542ddcad8caea1b363955b96efa9ca25b603724f8665a5ad73e65679d97f68cad362ed8190c16e48825fa9-1"' : 'data-target="#xs-controllers-links-module-IntrastructureModule-87918e0dc124b7d8c0d72302233b5e3ef45b05e9be542ddcad8caea1b363955b96efa9ca25b603724f8665a5ad73e65679d97f68cad362ed8190c16e48825fa9-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IntrastructureModule-87918e0dc124b7d8c0d72302233b5e3ef45b05e9be542ddcad8caea1b363955b96efa9ca25b603724f8665a5ad73e65679d97f68cad362ed8190c16e48825fa9-1"' :
                                            'id="xs-controllers-links-module-IntrastructureModule-87918e0dc124b7d8c0d72302233b5e3ef45b05e9be542ddcad8caea1b363955b96efa9ca25b603724f8665a5ad73e65679d97f68cad362ed8190c16e48825fa9-1"' }>
                                            <li class="link">
                                                <a href="controllers/LoansController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoansController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessagingModule.html" data-type="entity-link" >MessagingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagingModule.html" data-type="entity-link" >MessagingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MongoModule.html" data-type="entity-link" >MongoModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MongoModule-d274b536fea27cd349d634fdcf48153726c178630fffca7029ab4fc27c88a20796adfc916c1a7b5c0b98760fbee29d27a27609668bbd687b1bd9b34c07b167c8"' : 'data-target="#xs-injectables-links-module-MongoModule-d274b536fea27cd349d634fdcf48153726c178630fffca7029ab4fc27c88a20796adfc916c1a7b5c0b98760fbee29d27a27609668bbd687b1bd9b34c07b167c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MongoModule-d274b536fea27cd349d634fdcf48153726c178630fffca7029ab4fc27c88a20796adfc916c1a7b5c0b98760fbee29d27a27609668bbd687b1bd9b34c07b167c8"' :
                                        'id="xs-injectables-links-module-MongoModule-d274b536fea27cd349d634fdcf48153726c178630fffca7029ab4fc27c88a20796adfc916c1a7b5c0b98760fbee29d27a27609668bbd687b1bd9b34c07b167c8"' }>
                                        <li class="link">
                                            <a href="injectables/BookMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BookRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TypeOrmMongoDBConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TypeOrmMongoDBConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MongoModule.html" data-type="entity-link" >MongoModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MongoModule-d9607dd3c4cf110f0d3edc9fde64969d39ccf12ed25bf20c257c419a1dcf6367de0b24294302f0b340162822286b0f9b8e563694515247c3699f3debcd34b2d3-1"' : 'data-target="#xs-injectables-links-module-MongoModule-d9607dd3c4cf110f0d3edc9fde64969d39ccf12ed25bf20c257c419a1dcf6367de0b24294302f0b340162822286b0f9b8e563694515247c3699f3debcd34b2d3-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MongoModule-d9607dd3c4cf110f0d3edc9fde64969d39ccf12ed25bf20c257c419a1dcf6367de0b24294302f0b340162822286b0f9b8e563694515247c3699f3debcd34b2d3-1"' :
                                        'id="xs-injectables-links-module-MongoModule-d9607dd3c4cf110f0d3edc9fde64969d39ccf12ed25bf20c257c419a1dcf6367de0b24294302f0b340162822286b0f9b8e563694515247c3699f3debcd34b2d3-1"' }>
                                        <li class="link">
                                            <a href="injectables/LoanMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoanMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MongooseConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MongooseConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersistenceModule.html" data-type="entity-link" >PersistenceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PersistenceModule-a58ac84878e0380963816becb03cd6e3e7526ea8430b199866713392cc4f6018589697aaa8dcf2201f1c29a791d48c76b5113e2e8797465e8b49113381dd3d3b"' : 'data-target="#xs-injectables-links-module-PersistenceModule-a58ac84878e0380963816becb03cd6e3e7526ea8430b199866713392cc4f6018589697aaa8dcf2201f1c29a791d48c76b5113e2e8797465e8b49113381dd3d3b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PersistenceModule-a58ac84878e0380963816becb03cd6e3e7526ea8430b199866713392cc4f6018589697aaa8dcf2201f1c29a791d48c76b5113e2e8797465e8b49113381dd3d3b"' :
                                        'id="xs-injectables-links-module-PersistenceModule-a58ac84878e0380963816becb03cd6e3e7526ea8430b199866713392cc4f6018589697aaa8dcf2201f1c29a791d48c76b5113e2e8797465e8b49113381dd3d3b"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersistenceModule.html" data-type="entity-link" >PersistenceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PersistenceModule-acb5e6d6b96801fdf049a2982fd8adafb09b0ee8dd8566755f77ff7ace0ea67ddb19adddf6222d1873c373de120ac3be6b6166bac3bd8695f6647e97430af54d-1"' : 'data-target="#xs-injectables-links-module-PersistenceModule-acb5e6d6b96801fdf049a2982fd8adafb09b0ee8dd8566755f77ff7ace0ea67ddb19adddf6222d1873c373de120ac3be6b6166bac3bd8695f6647e97430af54d-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PersistenceModule-acb5e6d6b96801fdf049a2982fd8adafb09b0ee8dd8566755f77ff7ace0ea67ddb19adddf6222d1873c373de120ac3be6b6166bac3bd8695f6647e97430af54d-1"' :
                                        'id="xs-injectables-links-module-PersistenceModule-acb5e6d6b96801fdf049a2982fd8adafb09b0ee8dd8566755f77ff7ace0ea67ddb19adddf6222d1873c373de120ac3be6b6166bac3bd8695f6647e97430af54d-1"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ClassificationController.html" data-type="entity-link" >ClassificationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoansController.html" data-type="entity-link" >LoansController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/AuthorEntityMongo.html" data-type="entity-link" >AuthorEntityMongo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/BookEntityMongo.html" data-type="entity-link" >BookEntityMongo</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthorDomainEntity.html" data-type="entity-link" >AuthorDomainEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthorDto.html" data-type="entity-link" >AuthorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookDomainEntity.html" data-type="entity-link" >BookDomainEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookDto.html" data-type="entity-link" >BookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createBookDto.html" data-type="entity-link" >createBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookPublisher.html" data-type="entity-link" >CreateBookPublisher</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookUseCase.html" data-type="entity-link" >CreateBookUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLoanUseCase.html" data-type="entity-link" >CreateLoanUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserUseCase.html" data-type="entity-link" >CreateUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteBookDto.html" data-type="entity-link" >DeleteBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteBookUseCase.html" data-type="entity-link" >DeleteBookUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBookUseCase.html" data-type="entity-link" >GetBookUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoanDomainModel.html" data-type="entity-link" >LoanDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoanRepository.html" data-type="entity-link" >LoanRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoanSchemaMongo.html" data-type="entity-link" >LoanSchemaMongo</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoanService.html" data-type="entity-link" >LoanService</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewLoanPublisher.html" data-type="entity-link" >NewLoanPublisher</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLoanDto.html" data-type="entity-link" >UpdateLoanDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLoanUseCase.html" data-type="entity-link" >UpdateLoanUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDomainModel.html" data-type="entity-link" >UserDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSchemaMongo.html" data-type="entity-link" >UserSchemaMongo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BookMongoService.html" data-type="entity-link" >BookMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookRepository.html" data-type="entity-link" >BookRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoanMongoService.html" data-type="entity-link" >LoanMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongooseConfigService.html" data-type="entity-link" >MongooseConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeOrmMongoDBConfigService.html" data-type="entity-link" >TypeOrmMongoDBConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateLoanStatusUseCase.html" data-type="entity-link" >UpdateLoanStatusUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMongoService.html" data-type="entity-link" >UserMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/DateGuard.html" data-type="entity-link" >DateGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAuthorDomainInterface.html" data-type="entity-link" >IAuthorDomainInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBase.html" data-type="entity-link" >IBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBase-1.html" data-type="entity-link" >IBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookDomainInterface.html" data-type="entity-link" >IBookDomainInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBoookDomainService.html" data-type="entity-link" >IBoookDomainService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoanDomainInterface.html" data-type="entity-link" >ILoanDomainInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoanDomainServiceInterface.html" data-type="entity-link" >ILoanDomainServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserDomainInterface.html" data-type="entity-link" >IUserDomainInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserDomainInterface-1.html" data-type="entity-link" >IUserDomainInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});