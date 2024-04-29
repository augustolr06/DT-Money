import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton
} from './Header.styles';

import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal/NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt='' />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton type='button'>
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
