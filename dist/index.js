"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./utils/connection");
const createFood_1 = __importDefault(require("./routes/food/createFood"));
const getFood_1 = __importDefault(require("./routes/food/getFood"));
const deleteFood_1 = __importDefault(require("./routes/food/deleteFood"));
const updateFood_1 = __importDefault(require("./routes/food/updateFood"));
const createCategory_1 = require("./routes/category/createCategory");
const getCategory_1 = __importDefault(require("./routes/category/getCategory"));
const updateCategory_1 = __importDefault(require("./routes/category/updateCategory"));
const deleteCategory_1 = __importDefault(require("./routes/category/deleteCategory"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Хэрэглэгч хоол нэмэх
app.use("/addfood", createFood_1.default);
// Хэрэглэгчийн  хоол харах
app.use("/getfood", getFood_1.default);
// Хэрэглэгчийн  хоол устгах
app.use("/deletefood", deleteFood_1.default);
// Хэрэглэгчийн  хоол засах
app.use("/updatefood", updateFood_1.default);
// Хэрэглэгчийн хоолний төрөл нэмэх
app.use("/addcategory", createCategory_1.categoryRouter);
// Хэрэглэгчийн хоолний төрөл харах
app.use("/getcategory", getCategory_1.default);
// Хэрэглэгчийн хоолний төрөл засах
app.use("/updatecategory", updateCategory_1.default);
// Хэрэглэгчийн хоолний төрөл устгах
app.use("/deletecategory", deleteCategory_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connectDb)();
    console.log("Connected to MongoDB");
    console.log(`Server is running on port ${port}`);
}));
