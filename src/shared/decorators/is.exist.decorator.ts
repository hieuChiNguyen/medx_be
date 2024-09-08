import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { ModelCtor } from 'sequelize-typescript';
import DB from '@models/index';

export function IsAlreadyExist(model: ModelCtor, field: string, validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [model, field],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [model, tableField] = args.constraints;

          if (!value) {
            return true;
          }

          const modelCtor: ModelCtor = DB.sequelize.model(model);

          if (modelCtor == undefined) {
            return false;
          }

          const whereClause = {};

          whereClause[tableField] = value;

          return modelCtor
            .findOne({
              where: whereClause,
            })
            .then((record) => {
              if (record) return true;

              return false;
            });
        },

        defaultMessage(): string {
          return `${propertyName} is not existed`;
        },
      },
    });
  };
}
