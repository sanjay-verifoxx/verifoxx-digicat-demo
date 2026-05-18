window.PETSDemoData = {
  useCases: {
    intervention: {
      key: "intervention",
      shortLabel: "Early Intervention",
      screenTitle: "PETs Educational Demo Space",
      topbarTitle: "PETs Educational Demo Space",
      poweredBy: "Powered by Verifoxx",
      landing: {
        eyebrow: "Use Case #1",
        heroTitle: "Identifying vulnerable people using two distinct datasets",
        heroDescription: "This use case looks at how highly sensitive personal data can help different public sector teams collaborate and provide better public services, all without any data leaving either organisation.",
        supportingText: "Linking data without moving data helps boost early intervention while records stay within each organisation's own environment.",
        explore: [
          "How fragmented signals can limit intervention opportunities",
          "How Privacy Enhancing Technologies (PETs) enable secure collaboration",
          "How repeat interaction patterns can be identified earlier",
          "How organisations can generate insights without exposing raw personal records"
        ],
        useCaseTitle: "Identifying Vulnerable People",
        useCaseBody: "The health service and social services each hold different datasets on vulnerable people. Because data is not connected, each authority does not have the full picture, meaning a person's situation could be worse than it appears.\n\nA better service could be provided with earlier intervention if approved indicators were linked without moving the underlying data.",
        benefits: [
          "Secure collaboration without sharing personal data",
          "Stronger visibility of at-risk individuals",
          "Earlier intervention opportunities",
          "Better outcomes for individuals and communities",
          "Organisation-controlled and governance-first"
        ]
      },
      before: {
        title: "BEFORE PETs — Fragmented Signals",
        pageTitle: "Identifying Vulnerable People",
        subtitle: "Linking data without moving data, to boost early intervention",
        filter: "Last 1 Month",
        left: {
          name: "Health Service",
          subtitle: "Individual-level health signals",
          icon: "❤",
          color: "blue",
          footer: "Repeat individuals identified: 2",
          rows: [
            ["H-2001", "Yes", "Injury Visit", "Medium"],
            ["H-2002", "No", "Mental Health Referral", "Low"],
            ["H-2003", "Yes", "Emergency Visit", "Medium"],
            ["H-2004", "No", "Anxiety Related", "Low"],
            ["H-2005", "Yes", "Self Harm", "Medium"]
          ]
        },
        right: {
          name: "Social Services",
          subtitle: "Individual-level support signals",
          icon: "👥",
          color: "green",
          footer: "Repeat individuals identified: 2",
          rows: [
            ["S-1001", "Yes", "Crisis Request", "Medium"],
            ["S-1002", "No", "Missed Appointment", "Low"],
            ["S-1003", "Yes", "Safeguarding Concern", "Medium"],
            ["S-1004", "Yes", "Temporary Housing Request", "Medium"],
            ["S-1005", "No", "Outreach Escalation", "Medium"]
          ]
        },
        limitations: [
          "Health Service can identify repeat health interactions",
          "Social Services can identify repeat support interactions",
          "BUT organisations cannot securely connect indicators across systems",
          "Some individuals may not meet intervention thresholds independently"
        ]
      },
      processing: {
        title: "PROCESSING VIEW — Secure Collaboration Running",
        pageTitle: "Running Secure Collaboration",
        subtitle: "Securely connecting approved indicators",
        trust: [
          "Personal records protected",
          "Approved analytics only",
          "Organisation-controlled"
        ],
        steps: [
          "Protecting sensitive fields",
          "Matching approved indicators",
          "Identifying repeat patterns",
          "Generating intervention insights"
        ],
        footerTitle: "Your data remains secure.",
        footerBody: "Only approved, privacy-safe insights are generated. Data stays within each organisation's own secure environment."
      },
      after: {
        title: "AFTER PETs — Joined-Up Intervention Insights",
        pageTitle: "Early Intervention Signals",
        subtitle: "Joined-up visibility generated securely without exposing personal data",
        filter: "Last 1 Month",
        metrics: [
          { value: "3", label: "Secure matches identified", icon: "↔", color: "purple" },
          { value: "1", label: "New health incident not previously visible to Social Services", icon: "✚", color: "blue" },
          { value: "2", label: "Recommended follow-up actions", icon: "✓", color: "green" }
        ],
        hotspotTitle: "UK Early Intervention Hotspots",
        layers: {
          left: "Health",
          right: "Social Services",
          combined: "Combined"
        },
        regions: {
          left: {
            UKC: 0.22,
            UKD: 0.58,
            UKE: 0.46,
            UKF: 0.28,
            UKG: 0.68,
            UKH: 0.24,
            UKI: 0.82,
            UKJ: 0.18,
            UKK: 0.14,
            UKL: 0.26,
            UKM: 0.38,
            UKN: 0.12
          },
          right: {
            UKC: 0.12,
            UKD: 0.22,
            UKE: 0.28,
            UKF: 0.54,
            UKG: 0.42,
            UKH: 0.18,
            UKI: 0.34,
            UKJ: 0.22,
            UKK: 0.16,
            UKL: 0.58,
            UKM: 0.62,
            UKN: 0.24
          }
        },
        breakdown: [
          { label: "Safeguarding", count: 2, color: "#5b48f5" },
          { label: "Mental Health", count: 1, color: "#2f6ff2" },
          { label: "Housing Support", count: 1, color: "#21a067" },
          { label: "Self Harm", count: 1, color: "#f59e0b" }
        ],
        whyBefore: [
          "Organisations saw isolated warning signs",
          "Some people may have been monitored separately",
          "Earlier support opportunities could be missed"
        ],
        whyAfter: [
          "Approved indicators were securely connected",
          "More complete support pictures were created",
          "Follow-up actions could be prioritised"
        ],
        footer: "WITHOUT exposing personal records"
      },
      match: {
        title: "SECURE MATCH EXPLANATION — Why This Person Was Highlighted",
        beforeLabel: "Before PETs",
        leftTitle: "Health Service sees:",
        leftBody: "3 injury-related emergency visits in 6 weeks",
        leftPriority: "Medium",
        rightTitle: "Social Services sees:",
        rightBody: "Temporary housing request",
        rightPriority: "Medium",
        withoutTitle: "Without PETs:",
        withoutBody: "Each organisation sees only part of the picture. The person may continue to be monitored separately.",
        afterLabel: "After PETs",
        insightTitle: "Joined-up insight:",
        insightBody: "Repeat injury-related emergency visits + temporary housing request",
        combinedTitle: "Combined priority:",
        combinedValue: "High",
        responseTitle: "Recommended response:",
        responseBody: "Coordinated safeguarding review",
        whyTitle: "Why this matters",
        whyBody: "The joined-up view suggests escalating vulnerability that was not obvious from either dataset alone.",
        privacyTitle: "Privacy note",
        privacyBody: "Personal identifiers remain protected. Only approved indicators are connected.",
        dataBoundaryTitle: "Data stays within each organisation's environment",
        dataBoundaryBody: "Underlying records do not leave the organisation that holds them. Only approved indicators are used to generate the joined-up view."
      },
      drilldown: {
        title: "VIEW INDICATORS BEHIND THIS MATCH",
        leftTitle: "Health Service indicator",
        leftBody: "3 injury-related emergency visits in 6 weeks",
        leftPriority: "Medium",
        rightTitle: "Social Services indicator",
        rightBody: "Temporary housing request",
        rightPriority: "Medium",
        connectedTitle: "What PETs connected",
        connectedBody: "The same person appears in both datasets through approved matching. The combined view shows that separate medium-priority indicators together suggest a higher support need.",
        hiddenTitle: "What remains hidden",
        hidden: [
          "Name",
          "Address",
          "NHS number",
          "Case notes",
          "Full medical record",
          "Full support history"
        ],
        resultTitle: "Result",
        resultBody: "The combined picture supports a coordinated safeguarding review.",
        footer: "All personal identifiers remain protected at all times.",
        dataBoundaryBody: "Underlying records remain within each organisation's own environment throughout the matching process."
      }
    },
    operational: {
      key: "operational",
      shortLabel: "Energy-Water Risk",
      screenTitle: "PETs Educational Demo Space",
      topbarTitle: "PETs Educational Demo Space",
      poweredBy: "Powered by Verifoxx",
      landing: {
        eyebrow: "Use Case #2",
        heroTitle: "Increasing resilience and collaboration across two different sectors",
        heroDescription: "This use case examines how sensitive operational data across two different critical national infrastructure sectors can be analysed to decrease risk, without any data leaving its owner.",
        supportingText: "Increased resilience of infrastructure without exposing sensitive data depends on approved indicators, not moving the underlying operational records.",
        explore: [
          "How fragmented operational signals can delay resilience action",
          "How PETs enable secure cross-market collaboration",
          "How infrastructure dependencies can be identified earlier",
          "How organisations can generate resilience insights without exposing operational systems"
        ],
        useCaseTitle: "Cross-Market Operational Risk",
        useCaseBody: "Energy and water organisations operate in different markets, but their infrastructure is operationally connected.\n\nPETs enable approved indicators to be securely connected across markets, helping increase resilience and collaboration without exposing sensitive data or moving the underlying records from their owners.",
        benefits: [
          "Secure cross-market collaboration",
          "Earlier identification of operational disruption risk",
          "Better visibility of energy-water dependencies",
          "Reduced need to expose asset locations or operational systems",
          "Organisation-controlled and governance-first"
        ]
      },
      before: {
        title: "BEFORE PETs — Fragmented Market Signals",
        pageTitle: "Cross-Market Operational Risk",
        subtitle: "Energy and water organisations each see only part of the operational picture.",
        filter: "Last 1 Month",
        left: {
          name: "Energy Network Operator",
          subtitle: "Energy-side operational signals",
          icon: "⚡",
          color: "blue",
          footer: "Repeat energy events identified: 3",
          rows: [
            ["E-3001", "Yes", "Voltage Instability", "Medium"],
            ["E-3002", "No", "Planned Maintenance", "Low"],
            ["E-3003", "Yes", "Local Supply Dip", "Medium"],
            ["E-3004", "No", "Peak Load Increase", "Low"],
            ["E-3005", "Yes", "Grid Constraint", "Medium"]
          ]
        },
        right: {
          name: "Water Utility",
          subtitle: "Water-side operational signals",
          icon: "💧",
          color: "green",
          footer: "Repeat water events identified: 3",
          rows: [
            ["W-7001", "Yes", "Pumping Station Alert", "Medium"],
            ["W-7002", "No", "Backup Capacity Limited", "Low"],
            ["W-7003", "Yes", "Service Pressure Drop", "Medium"],
            ["W-7004", "Yes", "Treatment Site Dependency", "Medium"],
            ["W-7005", "No", "Pollution Event Risk", "Medium"]
          ]
        },
        limitations: [
          "Energy Network Operator can identify local supply disruption risks",
          "Water Utility can identify critical water assets and operational dependencies",
          "BUT neither are aware of the other's risks, meaning geographical areas where both have risks should be prioritised and protected"
        ]
      },
      processing: {
        title: "PROCESSING VIEW — Secure Collaboration Running",
        pageTitle: "Running Secure Cross-Market Collaboration",
        subtitle: "Securely connecting approved operational indicators across markets",
        trust: [
          "Sensitive infrastructure data protected",
          "Approved analytics only",
          "Organisation-controlled"
        ],
        steps: [
          "Protecting sensitive operational fields",
          "Applying data owner rules",
          "Matching approved cross-market indicators",
          "Identifying energy-water dependencies",
          "Generating operational risk insights"
        ],
        footerTitle: "Operational data remains secure.",
        footerBody: "Only approved, resilience-focused insights are generated. Data stays within each organisation's own secure environment."
      },
      after: {
        title: "AFTER PETs — Joined-Up Cross-Market Insights",
        pageTitle: "Cross-Market Operational Risk",
        subtitle: "Increased resilience of infrastructure without exposing sensitive data",
        filter: "Last 1 Month",
        metrics: [
          { value: "3", label: "Mutual critical asset locations", icon: "↔", color: "purple" },
          { value: "1", label: "Critical water asset dependency not previously visible to Energy", icon: "⚠", color: "blue" },
          { value: "2", label: "Recommended resilience actions", icon: "✓", color: "green" }
        ],
        hotspotTitle: "UK Energy-Water Operational Risk Hotspots",
        layers: {
          left: "Energy",
          right: "Water",
          combined: "Combined"
        },
        regions: {
          left: {
            UKC: 0.72,
            UKD: 0.68,
            UKE: 0.52,
            UKF: 0.24,
            UKG: 0.46,
            UKH: 0.2,
            UKI: 0.12,
            UKJ: 0.14,
            UKK: 0.2,
            UKL: 0.22,
            UKM: 0.76,
            UKN: 0.16
          },
          right: {
            UKC: 0.18,
            UKD: 0.26,
            UKE: 0.34,
            UKF: 0.42,
            UKG: 0.82,
            UKH: 0.56,
            UKI: 0.16,
            UKJ: 0.12,
            UKK: 0.22,
            UKL: 0.62,
            UKM: 0.48,
            UKN: 0.14
          }
        },
        breakdown: [
          { label: "Pumping Station Dependency", count: 2, color: "#5b48f5" },
          { label: "Local Supply Instability", count: 1, color: "#2f6ff2" },
          { label: "Backup Capacity Constraint", count: 1, color: "#21a067" },
          { label: "Pollution Event Risk", count: 1, color: "#f59e0b" }
        ],
        whyBefore: [
          "Each market saw isolated operational signals",
          "Energy-side risks were not easily linked to water-side criticality",
          "Earlier resilience actions could be missed"
        ],
        whyAfter: [
          "Approved indicators were securely connected across markets",
          "Energy disruption risks could be linked to critical water dependencies",
          "Resilience actions could be prioritised"
        ],
        footer: "WITHOUT exposing sensitive operational data"
      },
      match: {
        title: "SECURE MATCH EXPLANATION — Why This Cross-Market Risk Was Highlighted",
        beforeLabel: "Before PETs",
        leftTitle: "Energy Network Operator sees:",
        leftBody: "Repeated local supply dips in a network zone",
        leftPriority: "Medium",
        rightTitle: "Water Utility sees:",
        rightBody: "Pumping station alert in the same operational area",
        rightPriority: "Medium",
        withoutTitle: "Without PETs:",
        withoutBody: "Each organisation sees only part of the operational picture. Neither side can easily see that the same operational area creates a higher resilience concern.",
        afterLabel: "After PETs",
        insightTitle: "Joined-up insight:",
        insightBody: "Repeated local supply dips + critical pumping station dependency",
        combinedTitle: "Combined priority:",
        combinedValue: "High",
        responseTitle: "Recommended response:",
        responseBody: "Joint resilience review",
        whyTitle: "Why this matters",
        whyBody: "The joined-up view suggests that a local energy supply issue could affect a water asset that supports service continuity.",
        privacyTitle: "Sensitivity note",
        privacyBody: "Sensitive infrastructure details remain protected. Only approved operational indicators are connected.",
        dataBoundaryTitle: "Operational data stays within each organisation's environment",
        dataBoundaryBody: "Asset records and operational system details remain with the organisation that owns them. Only approved indicators contribute to the joined-up resilience view."
      },
      drilldown: {
        title: "VIEW INDICATORS BEHIND THIS CROSS-MARKET MATCH",
        leftTitle: "Energy Network indicator",
        leftBody: "Repeated local supply dips in a network zone",
        leftPriority: "Medium",
        rightTitle: "Water Utility indicator",
        rightBody: "Pumping station alert in the same operational area",
        rightPriority: "Medium",
        connectedTitle: "What PETs connected",
        connectedBody: "The same operational area appears in both market datasets through approved matching. The combined view shows that a medium-priority energy event may have a higher operational impact because it affects a water asset that supports service continuity.",
        hiddenTitle: "What remains hidden",
        hidden: [
          "Exact substation location",
          "Network configuration",
          "Pumping station coordinates",
          "Internal maintenance notes",
          "Full operational system data",
          "Security-sensitive infrastructure details"
        ],
        resultTitle: "Result",
        resultBody: "The combined picture supports a joint resilience review.",
        footer: "Sensitive operational data remains protected at all times.",
        dataBoundaryBody: "Operational records remain within each organisation's own environment while approved indicators are matched."
      }
    }
  }
};
