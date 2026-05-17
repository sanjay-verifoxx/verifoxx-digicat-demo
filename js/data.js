window.PETSDemoData = {
  useCases: {
    intervention: {
      key: "intervention",
      shortLabel: "Early Intervention",
      screenTitle: "PETs Educational Demo Space",
      topbarTitle: "PETs Educational Demo Space",
      poweredBy: "Powered by Verifoxx",
      landing: {
        heroTitle: "PETs Educational Demo Space",
        heroDescription: "Explore how organisations can securely collaborate and generate joined-up insights without exposing sensitive personal data.",
        supportingText: "Privacy Enhancing Technologies (PETs) enable secure collaboration and better outcomes.",
        explore: [
          "How fragmented signals can limit intervention opportunities",
          "How Privacy Enhancing Technologies (PETs) enable secure collaboration",
          "How repeat interaction patterns can be identified earlier",
          "How organisations can generate insights without exposing raw personal records"
        ],
        useCaseTitle: "Early Intervention Signals",
        useCaseBody: "Health Service and Social Services each hold different indicators relating to individuals requiring support.\n\nPETs enable approved indicators to be securely connected, improving visibility of repeat interactions and earlier intervention opportunities.",
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
        pageTitle: "Early Intervention Signals",
        subtitle: "Fragmented visibility across organisations",
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
        footerBody: "Only approved, privacy-safe insights are generated."
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
            UKC: 0.34,
            UKD: 0.48,
            UKE: 0.5,
            UKF: 0.44,
            UKG: 0.62,
            UKH: 0.36,
            UKI: 0.74,
            UKJ: 0.32,
            UKK: 0.28,
            UKL: 0.3,
            UKM: 0.42,
            UKN: 0.2
          },
          right: {
            UKC: 0.2,
            UKD: 0.28,
            UKE: 0.34,
            UKF: 0.46,
            UKG: 0.58,
            UKH: 0.3,
            UKI: 0.38,
            UKJ: 0.24,
            UKK: 0.2,
            UKL: 0.42,
            UKM: 0.5,
            UKN: 0.26
          },
          combined: {
            UKC: 0.36,
            UKD: 0.52,
            UKE: 0.58,
            UKF: 0.52,
            UKG: 0.76,
            UKH: 0.42,
            UKI: 0.68,
            UKJ: 0.34,
            UKK: 0.38,
            UKL: 0.48,
            UKM: 0.54,
            UKN: 0.3
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
        matchId: "MATCH-001",
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
        privacyBody: "Personal identifiers remain protected. Only approved indicators are connected."
      },
      drilldown: {
        title: "VIEW INDICATORS BEHIND THIS MATCH",
        matchId: "MATCH-001",
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
        footer: "All personal identifiers remain protected at all times."
      }
    },
    operational: {
      key: "operational",
      shortLabel: "Energy-Water Risk",
      screenTitle: "PETs Educational Demo Space",
      topbarTitle: "PETs Educational Demo Space",
      poweredBy: "Powered by Verifoxx",
      landing: {
        heroTitle: "PETs Educational Demo Space",
        heroDescription: "Explore how organisations can securely collaborate and generate joined-up insights without exposing sensitive operational data.",
        supportingText: "Privacy Enhancing Technologies (PETs) enable secure collaboration and better resilience planning.",
        explore: [
          "How fragmented operational signals can delay resilience action",
          "How PETs enable secure cross-market collaboration",
          "How infrastructure dependencies can be identified earlier",
          "How organisations can generate resilience insights without exposing operational systems"
        ],
        useCaseTitle: "Cross-Market Operational Risk",
        useCaseBody: "Energy and water organisations operate in different markets, but their infrastructure is operationally connected.\n\nPETs enable approved indicators to be securely connected across markets, helping identify where energy disruption could affect water service continuity without exposing sensitive operational data.",
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
          "BUT cross-market dependencies are difficult to connect securely",
          "Some risks to water service continuity may not be prioritised early enough"
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
        footerBody: "Only approved, resilience-focused insights are generated."
      },
      after: {
        title: "AFTER PETs — Joined-Up Cross-Market Insights",
        pageTitle: "Cross-Market Operational Risk",
        subtitle: "Joined-up visibility generated securely across markets without exposing operational systems.",
        filter: "Last 1 Month",
        metrics: [
          { value: "3", label: "Secure cross-market matches identified", icon: "↔", color: "purple" },
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
            UKC: 0.54,
            UKD: 0.66,
            UKE: 0.58,
            UKF: 0.42,
            UKG: 0.6,
            UKH: 0.4,
            UKI: 0.3,
            UKJ: 0.28,
            UKK: 0.34,
            UKL: 0.32,
            UKM: 0.62,
            UKN: 0.24
          },
          right: {
            UKC: 0.22,
            UKD: 0.34,
            UKE: 0.4,
            UKF: 0.44,
            UKG: 0.74,
            UKH: 0.52,
            UKI: 0.26,
            UKJ: 0.2,
            UKK: 0.28,
            UKL: 0.48,
            UKM: 0.56,
            UKN: 0.2
          },
          combined: {
            UKC: 0.42,
            UKD: 0.58,
            UKE: 0.56,
            UKF: 0.5,
            UKG: 0.82,
            UKH: 0.58,
            UKI: 0.36,
            UKJ: 0.24,
            UKK: 0.34,
            UKL: 0.46,
            UKM: 0.62,
            UKN: 0.22
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
        matchId: "MATCH-EW-001",
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
        privacyBody: "Sensitive infrastructure details remain protected. Only approved operational indicators are connected."
      },
      drilldown: {
        title: "VIEW INDICATORS BEHIND THIS CROSS-MARKET MATCH",
        matchId: "MATCH-EW-001",
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
        footer: "Sensitive operational data remains protected at all times."
      }
    }
  }
};
