"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTechDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tech_dto_1 = require("./create-tech.dto");
class UpdateTechDto extends (0, mapped_types_1.PartialType)(create_tech_dto_1.CreateTechDto) {
}
exports.UpdateTechDto = UpdateTechDto;
//# sourceMappingURL=update-tech.dto.js.map