/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /api/v1/users/check/:name/:phone': { controller: 'UsersController',action:'check',swagger: {
      tag: ['check-user'],
      summary: 'Check if user exists',
      consumes: ["application/json"],
      produces: ["application/json"],
      responses: {
        "200": {
          description: "User and phone found"
        },
        "400": {
          description: "Missing parameters"
        },
        "404": {
          description: "User and phone not found"
        },
        "500": {
          description: "Internal server error"
        },
      },
      parameters: [{
          in: "path",
          name: "name",
          required: true,
          type: "string",
          description: "User nickname"
        },
        {
          in: "path",
          name: "phone",
          required: true,
          type: "string",
          description: "User phone (Ex: 17782222222 | 5531999999999)"
        }
      ],
      security: [{
        "Authorization": []
      }]
    }
  },
  'POST /api/v1/users/create': { controller: 'UsersController',action:'createFirstStep',swagger: {
    tag: ['first-step'],
    summary: 'Create first step for the user',
    consumes: ["application/json"],
    produces: ["application/json"],
    responses: {
      "201": {
        description: "User created successfully"
      },
      "400": {
        description: "Missing parameters"
      },
      "404": {
        description: "User and phone not found"
      },
      "500": {
        description: "Internal server error"
      },
    },
    parameters: [{
        in: "body",
        name: "data",
        required: true,
        type: "object",
        description: "Body content",
        properties: {
          name: {type: 'string'},
          phone: {type: 'string'} 
        }
      },
    ],
    security: [{
      "Authorization": []
    }]
  }
},
  'GET /api/v1/users/sms/:id': { controller: 'UsersController',action:'sendSMS',swagger: {
    tag: ['send-sms'],
    summary: 'Send SMS for user by id',
    consumes: ["application/json"],
    produces: ["application/json"],
    responses: {
      "200": {
        description: "SMS sent successfully"
      },
      "400": {
        description: "Missing parameters"
      },
      "404": {
        description: "User and phone not found"
      },
      "500": {
        description: "Internal server error"
      },
    },
    parameters: [{
        in: "path",
        name: "id",
        required: true,
        type: "string",
        description: "User id"
      }
    ],
    security: [{
      "Authorization": []
    }]
  },
},
'POST /api/v1/users/validateCode': { controller: 'UsersController',action:'validateCode',swagger: {
  tag: ['validate-sms'],
  summary: 'Validate Code for user',
  consumes: ["application/json"],
  produces: ["application/json"],
  responses: {
    "200": {
      description: "SMS validate successfully"
    },
    "400": {
      description: "Missing parameters"
    },
    "404": {
      description: "User and phone not found"
    },
    "500": {
      description: "Internal server error"
    },
  },
  parameters: [{
    in: "body",
    name: "data",
    required: true,
    type: "object",
    description: "Body content",
    properties: {
      id: {type: 'integer'},
      code: {type: 'integer'} 
    }
  },
],
  security: [{
    "Authorization": []
  }]
},
},

'PATCH /api/v1/users/updateProfile': { controller: 'UsersController',action:'updateProfile',swagger: {
  tag: ['update-profile'],
  summary: 'Update profile for user',
  consumes: ["application/json"],
  produces: ["application/json"],
  responses: {
    "200": {
      description: "Updated successfully"
    },
    "400": {
      description: "Missing parameters"
    },
    "404": {
      description: "User and phone not found"
    },
    "500": {
      description: "Internal server error"
    },
  },
  parameters: [{
    in: "body",
    name: "data",
    required: true,
    type: "object",
    description: "Body content",
    properties: {
      name: {type: 'string'},
      gender: {type: 'string'},
      birthDate: {type: 'string'}, 
    }
  },
],
},
},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
