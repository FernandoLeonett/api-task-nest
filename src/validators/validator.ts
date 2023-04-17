import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint()
export class ExpirationDateValidator implements ValidatorConstraintInterface {
  validate(expirationDate: Date) {
    const currentDate = new Date();
    return expirationDate > currentDate;
  }

  defaultMessage() {
    return 'Expiration date must be in the future';
  }
}
