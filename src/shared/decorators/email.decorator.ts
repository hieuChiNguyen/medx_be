import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

// Tạo decorator tùy chỉnh @CheckEmail theo phong cách giống IsAlreadyExist
export function CheckEmail(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value) {
            return false;
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return typeof value === 'string' && emailRegex.test(value);
        },

        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid email address`;
        },
      },
    });
  };
}
