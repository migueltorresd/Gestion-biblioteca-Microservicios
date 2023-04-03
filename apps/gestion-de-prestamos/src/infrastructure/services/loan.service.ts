import { LoanMongoService } from '../persistence/database/mongo/services/loans.mongo.service';

/**
 * Esta clase es la encargada de implementar los métodos de la interfaz ILoanDomainInterface
 * para poder ser utilizados por el controlador de prestamos
 *
 * @export
 * @class LoanService
 * @typedef {LoanService}
 * @extends {LoanMongoService}
 */
export class LoanService extends LoanMongoService {}
