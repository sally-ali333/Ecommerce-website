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
                    <a href="index.html" data-type="index-link">app1 documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' : 'data-bs-target="#xs-components-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' :
                                            'id="xs-components-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrandComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeaturedproductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeaturedproductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductitemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductitemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' : 'data-bs-target="#xs-pipes-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' :
                                            'id="xs-pipes-links-module-AppModule-febb704da37b457eb7d7c974727a7e3ae00d50c2457db1330f343d1a878d3c8cbe60c49ddaef84e7436a1fcce5a751ac328addb0aef7dcd244dde7d8dae1a461"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' : 'data-bs-target="#xs-components-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' :
                                            'id="xs-components-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' : 'data-bs-target="#xs-pipes-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' :
                                            'id="xs-pipes-links-module-CartModule-6e881caaacca7da372c9d5f77d567a801fce5453a40e56f8064294e686578cdad5132f64d74013c3df18a5e633cd1dafc463361024f467f31696545768e1bb10"' }>
                                            <li class="link">
                                                <a href="pipes/DeleteCartPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteCartPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartRoutingModule.html" data-type="entity-link" >CartRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrdersModule-7c1649d6ca1a43340d54793b025da9d9c1dfe1938b2c287923ac8aadfeff639c53e84862cc0152d17fe2acfdb06361d0fb07c3b7f13a75ff436febd82ecfbbbf"' : 'data-bs-target="#xs-components-links-module-OrdersModule-7c1649d6ca1a43340d54793b025da9d9c1dfe1938b2c287923ac8aadfeff639c53e84862cc0152d17fe2acfdb06361d0fb07c3b7f13a75ff436febd82ecfbbbf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-7c1649d6ca1a43340d54793b025da9d9c1dfe1938b2c287923ac8aadfeff639c53e84862cc0152d17fe2acfdb06361d0fb07c3b7f13a75ff436febd82ecfbbbf"' :
                                            'id="xs-components-links-module-OrdersModule-7c1649d6ca1a43340d54793b025da9d9c1dfe1938b2c287923ac8aadfeff639c53e84862cc0152d17fe2acfdb06361d0fb07c3b7f13a75ff436febd82ecfbbbf"' }>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingModule.html" data-type="entity-link" >SettingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SettingModule-c45ec191602ccb1397201993128a25aa33093b015fad18ef942e815897f4ba82edd161b533c2b83916742df77eb6d8b3178b60d7d199db5ccc6a255ac1680fd2"' : 'data-bs-target="#xs-components-links-module-SettingModule-c45ec191602ccb1397201993128a25aa33093b015fad18ef942e815897f4ba82edd161b533c2b83916742df77eb6d8b3178b60d7d199db5ccc6a255ac1680fd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingModule-c45ec191602ccb1397201993128a25aa33093b015fad18ef942e815897f4ba82edd161b533c2b83916742df77eb6d8b3178b60d7d199db5ccc6a255ac1680fd2"' :
                                            'id="xs-components-links-module-SettingModule-c45ec191602ccb1397201993128a25aa33093b015fad18ef942e815897f4ba82edd161b533c2b83916742df77eb6d8b3178b60d7d199db5ccc6a255ac1680fd2"' }>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingRoutingModule.html" data-type="entity-link" >SettingRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CityService.html" data-type="entity-link" >CityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpInterceptorInterceptor.html" data-type="entity-link" >HttpInterceptorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserGuard.html" data-type="entity-link" >UserGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category-1.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product-1.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Products.html" data-type="entity-link" >Products</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});