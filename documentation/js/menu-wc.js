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
                    <a href="index.html" data-type="index-link">labo documentation</a>
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
                                            'data-bs-target="#components-links-module-AppModule-76231640312ee508e013c5079b6f6fa92a6d233bc08c2998c6205712fd5a83bbbfcea240d446747deb27770dcd1b53d56f01dfba4c442ed2a5e03aed44b1b668"' : 'data-bs-target="#xs-components-links-module-AppModule-76231640312ee508e013c5079b6f6fa92a6d233bc08c2998c6205712fd5a83bbbfcea240d446747deb27770dcd1b53d56f01dfba4c442ed2a5e03aed44b1b668"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-76231640312ee508e013c5079b6f6fa92a6d233bc08c2998c6205712fd5a83bbbfcea240d446747deb27770dcd1b53d56f01dfba4c442ed2a5e03aed44b1b668"' :
                                            'id="xs-components-links-module-AppModule-76231640312ee508e013c5079b6f6fa92a6d233bc08c2998c6205712fd5a83bbbfcea240d446747deb27770dcd1b53d56f01dfba4c442ed2a5e03aed44b1b668"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-1dc2b52ef8231076f9f6ff03aeb152155da8f61ebfc298d8a570a67c3d83623d9fdffa99f53947bf8b49e4f44e823b36f61237cbe1d2cbef2bdd1404accd56e0"' : 'data-bs-target="#xs-components-links-module-AuthModule-1dc2b52ef8231076f9f6ff03aeb152155da8f61ebfc298d8a570a67c3d83623d9fdffa99f53947bf8b49e4f44e823b36f61237cbe1d2cbef2bdd1404accd56e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-1dc2b52ef8231076f9f6ff03aeb152155da8f61ebfc298d8a570a67c3d83623d9fdffa99f53947bf8b49e4f44e823b36f61237cbe1d2cbef2bdd1404accd56e0"' :
                                            'id="xs-components-links-module-AuthModule-1dc2b52ef8231076f9f6ff03aeb152155da8f61ebfc298d8a570a67c3d83623d9fdffa99f53947bf8b49e4f44e823b36f61237cbe1d2cbef2bdd1404accd56e0"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-c5f7be1f960aa95b81172103ceaadf3f85aa59f1efcc47b939c683240e87683ead416c6f71542f9d99ab9dfd323271a3f4a5100f33eaa0edd06049d6b85cd26b"' : 'data-bs-target="#xs-components-links-module-HomeModule-c5f7be1f960aa95b81172103ceaadf3f85aa59f1efcc47b939c683240e87683ead416c6f71542f9d99ab9dfd323271a3f4a5100f33eaa0edd06049d6b85cd26b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-c5f7be1f960aa95b81172103ceaadf3f85aa59f1efcc47b939c683240e87683ead416c6f71542f9d99ab9dfd323271a3f4a5100f33eaa0edd06049d6b85cd26b"' :
                                            'id="xs-components-links-module-HomeModule-c5f7be1f960aa95b81172103ceaadf3f85aa59f1efcc47b939c683240e87683ead416c6f71542f9d99ab9dfd323271a3f4a5100f33eaa0edd06049d6b85cd26b"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LayoutModule-94610aaeaa4fbbc0f02986f36b932d81042b194ad6cb6f22dfe6b5d1d88076497cb57dd6b9b0f45def64b4c722ac95129b2426469e503008a2b65c8d70f81db9"' : 'data-bs-target="#xs-components-links-module-LayoutModule-94610aaeaa4fbbc0f02986f36b932d81042b194ad6cb6f22dfe6b5d1d88076497cb57dd6b9b0f45def64b4c722ac95129b2426469e503008a2b65c8d70f81db9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-94610aaeaa4fbbc0f02986f36b932d81042b194ad6cb6f22dfe6b5d1d88076497cb57dd6b9b0f45def64b4c722ac95129b2426469e503008a2b65c8d70f81db9"' :
                                            'id="xs-components-links-module-LayoutModule-94610aaeaa4fbbc0f02986f36b932d81042b194ad6cb6f22dfe6b5d1d88076497cb57dd6b9b0f45def64b4c722ac95129b2426469e503008a2b65c8d70f81db9"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuLinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuLinkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MemberModule.html" data-type="entity-link" >MemberModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MemberModule-9010228199cc78131c1e6d89908d93a25ed7fef33b73cb2655fa088ff3554ef654b42ca04414499cae7c303ae5b6948376069273c04eec7e98980bef92e25f9c"' : 'data-bs-target="#xs-components-links-module-MemberModule-9010228199cc78131c1e6d89908d93a25ed7fef33b73cb2655fa088ff3554ef654b42ca04414499cae7c303ae5b6948376069273c04eec7e98980bef92e25f9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MemberModule-9010228199cc78131c1e6d89908d93a25ed7fef33b73cb2655fa088ff3554ef654b42ca04414499cae7c303ae5b6948376069273c04eec7e98980bef92e25f9c"' :
                                            'id="xs-components-links-module-MemberModule-9010228199cc78131c1e6d89908d93a25ed7fef33b73cb2655fa088ff3554ef654b42ca04414499cae7c303ae5b6948376069273c04eec7e98980bef92e25f9c"' }>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MemberRoutingModule.html" data-type="entity-link" >MemberRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' : 'data-bs-target="#xs-components-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' :
                                            'id="xs-components-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' }>
                                            <li class="link">
                                                <a href="components/CollapsePanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollapsePanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InProgressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InProgressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' :
                                            'id="xs-pipes-links-module-SharedModule-8ea917ed24d80fb3f5592b4d9add1703a0e08a6e268997a3664b3525119f5f6f1f5451a321001413470c85c19b2259487295763bb75bad12e149bd83f0b5afab"' }>
                                            <li class="link">
                                                <a href="pipes/EnumToArrayPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnumToArrayPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ToDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToDatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TournamentModule.html" data-type="entity-link" >TournamentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' : 'data-bs-target="#xs-components-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' :
                                            'id="xs-components-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' }>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TournamentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TournamentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' : 'data-bs-target="#xs-pipes-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' :
                                            'id="xs-pipes-links-module-TournamentModule-d3026b9ee6a514e49b6a36637ae9f6c14923b343d5fc2b01c3de429a297bc642a88696342b6ec66f8d260470a41d51a81e5b2be540998c54566dffb094471bbd"' }>
                                            <li class="link">
                                                <a href="pipes/RoundFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoundFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StatusToStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusToStringPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TournamentsRoutingModule.html" data-type="entity-link" >TournamentsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddComponent-1.html" data-type="entity-link" >AddComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DestroyedComponent.html" data-type="entity-link" >DestroyedComponent</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AsyncValidators.html" data-type="entity-link" >AsyncValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompareValidators.html" data-type="entity-link" >CompareValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateValidators.html" data-type="entity-link" >DateValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpUtils.html" data-type="entity-link" >HttpUtils</a>
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
                                    <a href="injectables/InscriptionService.html" data-type="entity-link" >InscriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchService.html" data-type="entity-link" >MatchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MemberService.html" data-type="entity-link" >MemberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TournamentEffects.html" data-type="entity-link" >TournamentEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TournamentService.html" data-type="entity-link" >TournamentService</a>
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
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
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
                                <a href="guards/FormSubmittedGuard.html" data-type="entity-link" >FormSubmittedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsAdminGuard.html" data-type="entity-link" >IsAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsLoggedGuard.html" data-type="entity-link" >IsLoggedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IsNotLoggedGuard.html" data-type="entity-link" >IsNotLoggedGuard</a>
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
                                <a href="interfaces/HasForm.html" data-type="entity-link" >HasForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginModel.html" data-type="entity-link" >LoginModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginModel-1.html" data-type="entity-link" >LoginModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchModel.html" data-type="entity-link" >MatchModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlayerScoreModel.html" data-type="entity-link" >PlayerScoreModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SessionState.html" data-type="entity-link" >SessionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenModel.html" data-type="entity-link" >TokenModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TournamentDetailsModel.html" data-type="entity-link" >TournamentDetailsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TournamentFormModel.html" data-type="entity-link" >TournamentFormModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TournamentModel.html" data-type="entity-link" >TournamentModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TournamentSearchModel.html" data-type="entity-link" >TournamentSearchModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TournamentState.html" data-type="entity-link" >TournamentState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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