"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscRoutes = exports.RecycleRoutes = exports.UserRoutes = exports.ProductRoutes = exports.CarpoolRoutes = exports.AuthRoutes = exports.AdminRoutes = void 0;
var admin_routes_1 = require("./admin.routes");
Object.defineProperty(exports, "AdminRoutes", { enumerable: true, get: function () { return __importDefault(admin_routes_1).default; } });
var auth_routes_1 = require("./auth.routes");
Object.defineProperty(exports, "AuthRoutes", { enumerable: true, get: function () { return __importDefault(auth_routes_1).default; } });
var carpool_routes_1 = require("./carpool.routes");
Object.defineProperty(exports, "CarpoolRoutes", { enumerable: true, get: function () { return __importDefault(carpool_routes_1).default; } });
var product_routes_1 = require("./product.routes");
Object.defineProperty(exports, "ProductRoutes", { enumerable: true, get: function () { return __importDefault(product_routes_1).default; } });
var user_routes_1 = require("./user.routes");
Object.defineProperty(exports, "UserRoutes", { enumerable: true, get: function () { return __importDefault(user_routes_1).default; } });
var recycle_routes_1 = require("./recycle.routes");
Object.defineProperty(exports, "RecycleRoutes", { enumerable: true, get: function () { return __importDefault(recycle_routes_1).default; } });
var misc_routes_1 = require("./misc.routes");
Object.defineProperty(exports, "MiscRoutes", { enumerable: true, get: function () { return __importDefault(misc_routes_1).default; } });
