// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionToDelete = await transactionsRepository.findOne({
      where: {
        id,
      },
    });

    if (!transactionToDelete) {
      throw new AppError('transaction not found', 404);
    }

    await transactionsRepository.remove(transactionToDelete);
  }
}

export default DeleteTransactionService;
