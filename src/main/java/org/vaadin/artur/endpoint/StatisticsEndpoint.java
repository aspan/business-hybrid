package org.vaadin.artur.endpoint;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;

@Endpoint
@AnonymousAllowed
public class StatisticsEndpoint {

    public Integer[] getPaymentData() {
        return new Integer[] { 24, 40, 32, 4 };
    }

    public Integer[] getTransactionData(int year) {
        return new Integer[] { 220, 240, 400, 360, 420, 640, 580, 800, 600, 580, 740, 800 };
    }
}