import Icon from '@mdi/react';
import { mdiWallet } from '@mdi/js';
import Alert from 'react-bootstrap/Alert';

const ClientMonthInvoicesValue = () => {

    return (

        <Alert variant="secondary">
            <div className="sum-container-element">
                <Alert.Heading>This month value</Alert.Heading>
                <p>
                    10000
                </p>
            </div>
            <Icon path={mdiWallet}
                size={2}
                color="gray" />
        </Alert>

    );
}

export default ClientMonthInvoicesValue;