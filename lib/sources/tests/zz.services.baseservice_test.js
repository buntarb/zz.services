// Copyright 2016 Artem Lytvynov <buntarb@gmail.com>. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @license Apache-2.0
 * @copyright Artem Lytvynov <buntarb@gmail.com>
 */

goog.provide( 'zz.services.BaseServiceTest' );
goog.setTestOnly( 'zz.services.BaseServiceTest' );

goog.require( 'goog.testing.jsunit' );
goog.require( 'zz.services.BaseService' );
goog.require( 'goog.events.EventTarget' );

var service;

function setUp( ){

    service = zz.services.BaseService.getInstance( );
}

function testConstructor( ){

    assertTrue(

        'Instance must be non-null and have the expected class',
        service instanceof zz.services.BaseService
    );
}

function testInheritance( ){

   assertTrue(

        'Instance must be non-null and have the expected class',
        service instanceof goog.events.EventTarget
    );
}

function testServiceCreating( ){

    assertThrows(

        'Service is a singleton',
        function( ){

            return new zz.services.BaseService( );
        });
}